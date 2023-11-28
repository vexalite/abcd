"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationsService = void 0;
const common_1 = require("@nestjs/common");
const repository_1 = require("./repository");
const repository_2 = require("../book-institute-relation/repository");
const repository_3 = require("../instituteSettings/repository");
const request_service_1 = require("../request.service");
let ReservationsService = class ReservationsService {
    constructor(requestService, reservationRepository, bookInstitutesRepository, instituteSettingRepository) {
        this.requestService = requestService;
        this.reservationRepository = reservationRepository;
        this.bookInstitutesRepository = bookInstitutesRepository;
        this.instituteSettingRepository = instituteSettingRepository;
        this.instituteId = this.requestService.getInstituteID();
    }
    calculateOverdueCharges(dueDate, charges) {
        const currentDate = new Date();
        if (dueDate > currentDate) {
            return 0;
        }
        const overDueDays = Math.floor((dueDate - currentDate) / (24 * 60 * 60 * 1000));
        const overdueCharges = overDueDays * charges;
        return overdueCharges;
    }
    async getAvailability(instituteId, bookId) {
        const getQuantity = await this.bookInstitutesRepository.findOne({
            bookId,
            instituteId,
        });
        const getIssued = await this.reservationRepository.findMultiple({
            bookId,
            instituteId,
            status: 'issued'
        });
        const getAvailability = getQuantity.quantity - getIssued.length;
        return getAvailability;
    }
    async issue(body) {
        try {
            const checkAvailability = await this.getAvailability(this.instituteId, body.bookId);
            const getInstituteSettings = await this.instituteSettingRepository.findOne({
                instituteId: this.instituteId,
            });
            if (checkAvailability > 0) {
                if (body.patronType === 'student') {
                    body.dueDate = new Date();
                    body.dueDate.setDate(body.dueDate.getDate() + getInstituteSettings.student.borrowingPeriod);
                    const createdReservation = await this.reservationRepository.create({
                        ...body,
                        instituteId: this.instituteId,
                    });
                    return createdReservation;
                }
                else {
                    body.dueDate = new Date();
                    body.dueDate.setDate(body.dueDate.getDate() + getInstituteSettings.employee.borrowingPeriod);
                    const createdReservation = await this.reservationRepository.create({
                        ...body,
                        instituteId: this.instituteId,
                    });
                    return createdReservation;
                }
            }
            else {
                return `unfortunately!, this book is not available`;
            }
        }
        catch (err) {
            console.log(err);
        }
    }
    async reIssueBook(id) {
        const getReservation = await this.reservationRepository.findById(id);
        const getBorrowingPeriod = await this.instituteSettingRepository.findOne({
            instituteId: getReservation.instituteId,
        });
        getReservation.renewDate = new Date();
        if (getReservation.patronType === 'student') {
            getReservation.dueDate = new Date();
            getReservation.dueDate.setDate(getReservation.dueDate.getDate() +
                getBorrowingPeriod.student.borrowingPeriod);
            const createdReservation = await this.reservationRepository.create(getReservation);
            return createdReservation;
        }
        else {
            getReservation.dueDate = new Date();
            getReservation.dueDate.setDate(getReservation.dueDate.getDate() +
                getBorrowingPeriod.employee.borrowingPeriod);
            const createdReservation = await this.reservationRepository.create(getReservation);
            return createdReservation;
        }
    }
    async returnBook(body, id) {
        const getReservation = await this.reservationRepository.findById(id);
        const getInstituteSettings = await this.instituteSettingRepository.findOne({
            instituteId: getReservation.instituteId,
        });
        if (getInstituteSettings.payLater) {
            const getReservation = await this.reservationRepository.findById(id);
            getReservation.returnedDate = new Date();
            const dueDate = getReservation.dueDate;
            let charges;
            if (getReservation.patronType === 'student') {
                charges = getInstituteSettings.student.overdueCharges;
            }
            else {
                charges = getInstituteSettings.employee.overdueCharges;
            }
            const overdueCharges = this.calculateOverdueCharges(dueDate, charges);
            getReservation.status = 'returned';
            getReservation.pendingCharges = overdueCharges;
            await this.reservationRepository.create(getReservation);
            return getReservation;
        }
        else {
            const getReservation = await this.reservationRepository.findById(id);
            getReservation.returnedDate = new Date();
            getReservation.status = 'returned';
            const dueDate = getReservation.dueDate;
            let charges;
            if (getReservation.patronType === 'student') {
                charges = getInstituteSettings.student.overdueCharges;
            }
            else {
                charges = getInstituteSettings.employee.overdueCharges;
            }
            const overdueCharges = this.calculateOverdueCharges(dueDate, charges);
            getReservation.overdueChargesPaid = overdueCharges;
            await this.reservationRepository.create(getReservation);
            return getReservation;
        }
    }
    async overdue(id) {
        const getReservation = await this.reservationRepository.findById(id);
        const getBorrowingPeriod = await this.instituteSettingRepository.findOne({
            instituteId: getReservation.instituteId,
        });
        const currentDate = new Date();
        const dueDate = new Date(getReservation.dueDate);
        if (dueDate > currentDate) {
            return 0;
        }
        const overDueDays = Math.floor((dueDate - currentDate) / (24 * 60 * 60 * 1000));
        if (getReservation.patronType === 'student') {
            const overdueCharges = overDueDays * getBorrowingPeriod.student.overdueCharges;
            return overdueCharges;
        }
        else {
            const overdueCharges = overDueDays * getBorrowingPeriod.employee.overdueCharges;
            return overdueCharges;
        }
    }
    async findAll() {
        const allReservations = await this.reservationRepository.findAllByInstitute(this.instituteId);
        return allReservations;
    }
    async findAllByBook(bookid) {
        const getQuantity = await this.bookInstitutesRepository.findOne({
            bookId: bookid,
            instituteId: this.instituteId,
        });
        const getIssued = await this.reservationRepository.findMultiple({
            bookId: bookid,
            instituteId: this.instituteId,
            status: 'issued'
        });
        const checkAvailability = getQuantity.quantity - getIssued.length;
        const status = 'issued';
        const allReservations = await this.reservationRepository.findReservationByBook(this.instituteId, bookid, status);
        return {
            quantity: getQuantity.quantity,
            availability: checkAvailability,
            reservations: allReservations,
        };
    }
    async findAllByPatron(patronid) {
        const status = 'issued';
        const allReservations = await this.reservationRepository.findReservationByPatron(this.instituteId, patronid, status);
        return allReservations;
    }
    async findHistoryByBook(bookid) {
        const status = 'returned';
        const allReservations = await this.reservationRepository.findReservationByBook(this.instituteId, bookid, status);
        return allReservations;
    }
    async findHistoryByPatron(patronid) {
        const status = 'returned';
        const allReservations = await this.reservationRepository.findReservationByPatron(this.instituteId, patronid, status);
        return allReservations;
    }
    async findOne(id) {
        const reservation = await this.reservationRepository.findByIdAndPopulate(id);
        const { dueDate } = reservation;
        const getInstituteSettings = await this.instituteSettingRepository.findOne({
            instituteId: this.instituteId,
        });
        let charges;
        if (reservation.patronType === 'student') {
            charges = getInstituteSettings.student.overdueCharges;
        }
        else {
            charges = getInstituteSettings.employee.overdueCharges;
        }
        const overdueCharges = this.calculateOverdueCharges(dueDate, charges);
        reservation.overdueCharges = overdueCharges;
        return reservation;
    }
    async status(bookId) {
        const checkAvailability = await this.getAvailability(this.instituteId, bookId);
        return checkAvailability;
    }
};
exports.ReservationsService = ReservationsService;
exports.ReservationsService = ReservationsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [request_service_1.RequestService,
        repository_1.ReservationRepository,
        repository_2.BookInstitutesRepository,
        repository_3.InstituteSettingRepository])
], ReservationsService);
//# sourceMappingURL=service.js.map