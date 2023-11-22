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
exports.ReservationsController = void 0;
const common_1 = require("@nestjs/common");
const service_1 = require("./service");
const create_reservation_dto_1 = require("./dto/create-reservation.dto");
let ReservationsController = class ReservationsController {
    constructor(reservationsService) {
        this.reservationsService = reservationsService;
    }
    issueBook(body) {
        return this.reservationsService.issue(body);
    }
    reIssueBook(id) {
        return this.reservationsService.reIssueBook(id);
    }
    returnBook(body, id) {
        return this.reservationsService.returnBook(body, id);
    }
    overdue(id) {
        return this.reservationsService.overdue(id);
    }
    findAll(instituteid) {
        return this.reservationsService.findAll(instituteid);
    }
    findOne(id) {
        return this.reservationsService.findOne(id);
    }
};
exports.ReservationsController = ReservationsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_reservation_dto_1.CreateReservationDto]),
    __metadata("design:returntype", void 0)
], ReservationsController.prototype, "issueBook", null);
__decorate([
    (0, common_1.Patch)('reissue:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReservationsController.prototype, "reIssueBook", null);
__decorate([
    (0, common_1.Patch)('return/:id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_reservation_dto_1.CreateReservationDto, String]),
    __metadata("design:returntype", void 0)
], ReservationsController.prototype, "returnBook", null);
__decorate([
    (0, common_1.Get)('overdue/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReservationsController.prototype, "overdue", null);
__decorate([
    (0, common_1.Get)('all/:instituteid'),
    __param(0, (0, common_1.Param)('instituteid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReservationsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ReservationsController.prototype, "findOne", null);
exports.ReservationsController = ReservationsController = __decorate([
    (0, common_1.Controller)('reservations'),
    __metadata("design:paramtypes", [service_1.ReservationsService])
], ReservationsController);
//# sourceMappingURL=controller.js.map