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
exports.BookInstitutesService = void 0;
const common_1 = require("@nestjs/common");
const repository_1 = require("./repository");
let BookInstitutesService = class BookInstitutesService {
    constructor(bookInstitutesRepository) {
        this.bookInstitutesRepository = bookInstitutesRepository;
    }
    async createBookInstitute(instituteid, bookInstitute) {
        return this.bookInstitutesRepository.create(bookInstitute);
    }
    async getBookInstitutes(instituteid) {
        return this.bookInstitutesRepository.findAllBooks(instituteid);
    }
    async getBookInstituteById(id) {
        return this.bookInstitutesRepository.findByIdAndPopulate(id);
    }
    async updateBookInstitute(id, bookInstitute) {
        return this.bookInstitutesRepository.update(id, bookInstitute);
    }
};
exports.BookInstitutesService = BookInstitutesService;
exports.BookInstitutesService = BookInstitutesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [repository_1.BookInstitutesRepository])
], BookInstitutesService);
//# sourceMappingURL=service.js.map