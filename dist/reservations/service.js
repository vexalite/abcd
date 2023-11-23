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
let ReservationsService = class ReservationsService {
    constructor(reservationRepository, bookInstitutesRepository, instituteSettingRepository) {
        this.reservationRepository = reservationRepository;
        this.bookInstitutesRepository = bookInstitutesRepository;
        this.instituteSettingRepository = instituteSettingRepository;
    }
    async issue(body) {
        const getQuantity = await this.bookInstitutesRepository.findOne({
            bookId: body.bookId,
            instituteId: body.instituteId,
        });
        const getIssued = await this.reservationRepository.findMultiple({
            bookId: body.bookId,
            instituteId: body.instituteId,
        });
        const checkAvailability = getQuantity.quantity - getIssued.length;
        console.log(`available -- ${checkAvailability}`);
        const getBorrowingPeriod = await this.instituteSettingRepository.findOne({
            instituteId: body.instituteId,
        });
        if (checkAvailability > 0) {
            if (body.patronType === 'student') {
                console.log(getIssued);
                body.dueDate = new Date();
                body.dueDate.setDate(body.dueDate.getDate() + getBorrowingPeriod.student.borrowingPeriod);
                const createdReservation = await this.reservationRepository.create(body);
                return createdReservation;
            }
            else {
                body.dueDate = new Date();
                body.dueDate.setDate(body.dueDate.getDate() + getBorrowingPeriod.employee.borrowingPeriod);
                const createdReservation = await this.reservationRepository.create(body);
                return createdReservation;
            }
        }
        else {
            return `unfortunately!, this book is not available`;
        }
    }
    async reIssueBook(id) {
        const getReservation = await this.reservationRepository.findById(id);
        console.log(getReservation);
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
        getReservation.returnedDate = new Date();
        getReservation.status = 'returned';
        getReservation.overdueChargesPaid = body.overdueChargesPaid;
        await this.reservationRepository.create(getReservation);
        return getReservation;
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
        console.log(`${new Date(currentDate)} + ${new Date(dueDate)} = ${overDueDays}`);
        if (getReservation.patronType === 'student') {
            const overdueCharges = overDueDays * getBorrowingPeriod.student.overdueCharges;
            return overdueCharges;
        }
        else {
            const overdueCharges = overDueDays * getBorrowingPeriod.employee.overdueCharges;
            return overdueCharges;
        }
    }
    async findAll(id) {
        console.log(id);
        const allReservations = await this.reservationRepository.findAllReservation(id);
        return allReservations;
    }
    async findOne(id) {
        const reservations = await this.reservationRepository.findById(id);
        return reservations;
    }
};
exports.ReservationsService = ReservationsService;
exports.ReservationsService = ReservationsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [repository_1.ReservationRepository,
        repository_2.BookInstitutesRepository,
        repository_3.InstituteSettingRepository])
], ReservationsService);
//# sourceMappingURL=service.js.map