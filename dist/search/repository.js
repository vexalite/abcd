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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchRepository = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const baseRepository_1 = require("../baseRepository");
let SearchRepository = class SearchRepository extends baseRepository_1.BaseRepository {
    constructor(bookModel, bookInstituteModel) {
        super(bookInstituteModel);
        this.bookModel = bookModel;
        this.bookInstituteModel = bookInstituteModel;
    }
    async universalSearch(id, searchQuery) {
        const book = await this.bookModel
            .find({
            $or: [
                { title: { $regex: new RegExp(searchQuery, 'i') } },
                { author: { $regex: new RegExp(searchQuery, 'i') } },
            ],
        })
            .exec();
        const booksToCheck = book.map((book) => book.id);
        const foundBooksInstitutes = await this.bookInstituteModel
            .find({
            instituteId: id,
            bookId: { $in: booksToCheck },
        })
            .populate('bookId')
            .exec();
        return foundBooksInstitutes;
    }
};
exports.SearchRepository = SearchRepository;
exports.SearchRepository = SearchRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Book')),
    __param(1, (0, mongoose_1.InjectModel)('BookInstitute')),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], SearchRepository);
//# sourceMappingURL=repository.js.map