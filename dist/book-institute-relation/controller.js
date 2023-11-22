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
exports.BookInstitutesController = void 0;
const common_1 = require("@nestjs/common");
const service_1 = require("./service");
let BookInstitutesController = class BookInstitutesController {
    constructor(bookInstitutesService) {
        this.bookInstitutesService = bookInstitutesService;
    }
    create(instituteid, bookInstitute) {
        return this.bookInstitutesService.createBookInstitute(instituteid, bookInstitute);
    }
    findAll(instituteid) {
        return this.bookInstitutesService.getBookInstitutes(instituteid);
    }
    findOne(id) {
        return this.bookInstitutesService.getBookInstituteById(id);
    }
    update(id, bookInstitute) {
        return this.bookInstitutesService.updateBookInstitute(id, bookInstitute);
    }
};
exports.BookInstitutesController = BookInstitutesController;
__decorate([
    (0, common_1.Post)(':instituteid'),
    __param(0, (0, common_1.Param)('instituteid')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], BookInstitutesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('all/:instituteid'),
    __param(0, (0, common_1.Param)('instituteid')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BookInstitutesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BookInstitutesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], BookInstitutesController.prototype, "update", null);
exports.BookInstitutesController = BookInstitutesController = __decorate([
    (0, common_1.Controller)('bookInstitutes'),
    __metadata("design:paramtypes", [service_1.BookInstitutesService])
], BookInstitutesController);
//# sourceMappingURL=controller.js.map