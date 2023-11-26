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
exports.InstituteController = void 0;
const common_1 = require("@nestjs/common");
const service_1 = require("./service");
const update_institute_dto_1 = require("./dto/update-institute.dto");
let InstituteController = class InstituteController {
    constructor(instituteService) {
        this.instituteService = instituteService;
    }
    create(body) {
        return this.instituteService.create(body);
    }
    findInstituteSetting() {
        return this.instituteService.findInstituteSetting();
    }
    findOne(id) {
        return this.instituteService.findOne(id);
    }
    update(id, updateInstituteDto) {
        return this.instituteService.update(id, updateInstituteDto);
    }
};
exports.InstituteController = InstituteController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], InstituteController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], InstituteController.prototype, "findInstituteSetting", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], InstituteController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_institute_dto_1.UpdateInstituteDto]),
    __metadata("design:returntype", void 0)
], InstituteController.prototype, "update", null);
exports.InstituteController = InstituteController = __decorate([
    (0, common_1.Controller)('institute'),
    __metadata("design:paramtypes", [service_1.InstituteService])
], InstituteController);
//# sourceMappingURL=controller.js.map