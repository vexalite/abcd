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
exports.BooksService = void 0;
const common_1 = require("@nestjs/common");
const repository_1 = require("./repository");
const repository_2 = require("../book-institute-relation/repository");
const request_service_1 = require("../request.service");
const repository_3 = require("../instituteSettings/repository");
const repository_4 = require("../reservations/repository");
let BooksService = class BooksService {
    constructor(requestService, booksRepository, reservationRepository, instituteSettingRepository, bookInstitutesRepository) {
        this.requestService = requestService;
        this.booksRepository = booksRepository;
        this.reservationRepository = reservationRepository;
        this.instituteSettingRepository = instituteSettingRepository;
        this.bookInstitutesRepository = bookInstitutesRepository;
        this.instituteId = this.requestService.getInstituteID();
    }
    async create(isbn, body) {
        try {
            const existingSetting = await this.instituteSettingRepository.findAllByInstitute(this.instituteId);
            if (!existingSetting) {
                const createdInstitute = await this.instituteSettingRepository.create({ instituteId: this.instituteId });
            }
            else {
                console.log(`setting exists`);
            }
            const existingBook = await this.booksRepository.findBookByISBN(isbn);
            if (existingBook) {
                console.log(existingBook.id);
                const relation = {
                    instituteId: this.instituteId,
                    bookId: existingBook.id,
                    quantity: body.quantity,
                };
                await this.bookInstitutesRepository.create(relation);
                return existingBook;
            }
            else {
                const createBook = await this.booksRepository.create(body);
                const relation = {
                    instituteId: this.instituteId,
                    bookId: createBook.id,
                    quantity: body.quantity,
                };
                await this.bookInstitutesRepository.create(relation);
                return createBook;
            }
        }
        catch (error) {
            console.error(`Error in create:`, error.message);
            throw error;
        }
    }
    async findInstituteBooks() {
        try {
            const books = await this.bookInstitutesRepository.findAllBooks(this.instituteId);
            return books;
        }
        catch (error) {
            console.error(`Error in findAll:`, error.message);
            throw error;
        }
    }
    async findAllBooks() {
        try {
            const books = await this.booksRepository.findAll();
            return books;
        }
        catch (error) {
            console.error(`Error in findAll:`, error.message);
            throw error;
        }
    }
    async findOne(id) {
        try {
            const book = await this.booksRepository.findById(id);
            return book;
        }
        catch (error) {
            console.error(`Error in findOne:`, error.message);
            throw error;
        }
    }
    async update(id, updateCatalogDto) {
        try {
            const updatedBook = await this.booksRepository.update(id, updateCatalogDto);
            return updatedBook;
        }
        catch (error) {
            console.error(`Error in update:`, error.message);
            throw error;
        }
    }
    async calculateTotalQuantity() {
        console.log(this.instituteId);
        const totalBooks = await this.booksRepository.findAllB(this.instituteId);
        const getIssued = await this.reservationRepository.findMultiple({
            instituteId: this.instituteId,
        });
        return {
            totalBooks: totalBooks,
            issuedBooks: getIssued.length,
            availableBooks: (totalBooks - getIssued.length)
        };
    }
};
exports.BooksService = BooksService;
exports.BooksService = BooksService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [request_service_1.RequestService,
        repository_1.BooksRepository,
        repository_4.ReservationRepository,
        repository_3.InstituteSettingRepository,
        repository_2.BookInstitutesRepository])
], BooksService);
//# sourceMappingURL=service.js.map