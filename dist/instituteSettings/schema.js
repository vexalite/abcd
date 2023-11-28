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
exports.InstituteSettingsSchema = exports.InstituteSettings = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const defaultStudent = {
    borrowingPeriod: 7,
    overdueCharges: 2,
    borrowingCapacity: 5,
};
const defaultEmployee = {
    borrowingPeriod: 10,
    overdueCharges: 4,
    borrowingCapacity: 5,
};
let InstituteSettings = class InstituteSettings extends mongoose_2.Document {
};
exports.InstituteSettings = InstituteSettings;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], InstituteSettings.prototype, "instituteId", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.default.Schema.Types.Mixed,
        required: true,
        default: defaultStudent,
    }),
    __metadata("design:type", Object)
], InstituteSettings.prototype, "student", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.default.Schema.Types.Mixed,
        required: true,
        default: defaultEmployee,
    }),
    __metadata("design:type", Object)
], InstituteSettings.prototype, "employee", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true, default: false }),
    __metadata("design:type", Boolean)
], InstituteSettings.prototype, "payLater", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], InstituteSettings.prototype, "createdAt", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], InstituteSettings.prototype, "updatedAt", void 0);
exports.InstituteSettings = InstituteSettings = __decorate([
    (0, mongoose_1.Schema)()
], InstituteSettings);
exports.InstituteSettingsSchema = mongoose_1.SchemaFactory.createForClass(InstituteSettings);
//# sourceMappingURL=schema.js.map