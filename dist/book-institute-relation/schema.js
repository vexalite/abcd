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
exports.BookInstituteSchema = exports.BookInstitutes = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let BookInstitutes = class BookInstitutes extends mongoose_2.Document {
};
exports.BookInstitutes = BookInstitutes;
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: mongoose_2.Types.ObjectId, ref: 'Book' }),
    __metadata("design:type", String)
], BookInstitutes.prototype, "bookId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], BookInstitutes.prototype, "instituteId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], BookInstitutes.prototype, "quantity", void 0);
exports.BookInstitutes = BookInstitutes = __decorate([
    (0, mongoose_1.Schema)()
], BookInstitutes);
const BookInstituteSchema = mongoose_1.SchemaFactory.createForClass(BookInstitutes);
exports.BookInstituteSchema = BookInstituteSchema;
//# sourceMappingURL=schema.js.map