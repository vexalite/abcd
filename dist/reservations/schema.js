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
exports.ReservationsSchema = exports.Reservations = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let Reservations = class Reservations {
};
exports.Reservations = Reservations;
__decorate([
    (0, mongoose_1.Prop)({ type: String, enum: ['student', 'employee'], required: true }),
    __metadata("design:type", String)
], Reservations.prototype, "patronType", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Reservations.prototype, "patronId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'Book', required: true }),
    __metadata("design:type", Object)
], Reservations.prototype, "bookId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Reservations.prototype, "instituteId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, enum: ['issued', 'returned'], required: true }),
    __metadata("design:type", String)
], Reservations.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", String)
], Reservations.prototype, "issuedBy", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Date, required: true, default: Date.now }),
    __metadata("design:type", Date)
], Reservations.prototype, "issuedDate", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Date, required: false }),
    __metadata("design:type", Date)
], Reservations.prototype, "renewDate", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: Date,
        required: true,
        default: () => new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    }),
    __metadata("design:type", Date)
], Reservations.prototype, "dueDate", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number }),
    __metadata("design:type", Number)
], Reservations.prototype, "overdueChargesPaid", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Date, required: false }),
    __metadata("design:type", Date)
], Reservations.prototype, "returnedDate", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Date, required: true, default: Date.now }),
    __metadata("design:type", Date)
], Reservations.prototype, "createdAt", void 0);
exports.Reservations = Reservations = __decorate([
    (0, mongoose_1.Schema)()
], Reservations);
exports.ReservationsSchema = mongoose_1.SchemaFactory.createForClass(Reservations);
//# sourceMappingURL=schema.js.map