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
exports.InstituteService = void 0;
const common_1 = require("@nestjs/common");
const repository_1 = require("./repository");
let InstituteService = class InstituteService {
    constructor(instituteSettingRepository) {
        this.instituteSettingRepository = instituteSettingRepository;
    }
    async create(createInstituteDto) {
        const createdInstitute = await this.instituteSettingRepository.create(createInstituteDto);
        return createdInstitute;
    }
    async findAll() {
        const allInstitutes = await this.instituteSettingRepository.findAll();
        return allInstitutes;
    }
    async findOne(id) {
        const institute = await this.instituteSettingRepository.findById(id);
        return institute;
    }
    async update(id, updateInstituteDto) {
        const updatedInstitute = await this.instituteSettingRepository.update(id, updateInstituteDto);
        return updatedInstitute;
    }
    async remove(id) {
        const removedInstitute = await this.instituteSettingRepository.remove(id);
        return removedInstitute;
    }
};
exports.InstituteService = InstituteService;
exports.InstituteService = InstituteService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [repository_1.InstituteSettingRepository])
], InstituteService);
//# sourceMappingURL=service.js.map