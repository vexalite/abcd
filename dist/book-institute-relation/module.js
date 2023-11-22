"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookInstituteRelationModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const schema_1 = require("./schema");
const controller_1 = require("./controller");
const service_1 = require("./service");
const repository_1 = require("./repository");
let BookInstituteRelationModule = class BookInstituteRelationModule {
};
exports.BookInstituteRelationModule = BookInstituteRelationModule;
exports.BookInstituteRelationModule = BookInstituteRelationModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: 'BookInstitute', schema: schema_1.BookInstituteSchema },
            ]),
        ],
        controllers: [controller_1.BookInstitutesController],
        providers: [service_1.BookInstitutesService, repository_1.BookInstitutesRepository],
    })
], BookInstituteRelationModule);
//# sourceMappingURL=module.js.map