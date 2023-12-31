"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstituteSettingsModule = void 0;
const common_1 = require("@nestjs/common");
const service_1 = require("./service");
const controller_1 = require("./controller");
const mongoose_1 = require("@nestjs/mongoose");
const schema_1 = require("./schema");
const repository_1 = require("./repository");
const auth_1 = require("../middleware/auth");
const request_service_1 = require("../request.service");
let InstituteSettingsModule = class InstituteSettingsModule {
    configure(consumer) {
        consumer
            .apply(auth_1.AuthenticationMiddleware)
            .forRoutes({ path: "institute", method: common_1.RequestMethod.GET });
    }
};
exports.InstituteSettingsModule = InstituteSettingsModule;
exports.InstituteSettingsModule = InstituteSettingsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: 'instituteSettings', schema: schema_1.InstituteSettingsSchema },
            ]),
        ],
        controllers: [controller_1.InstituteController],
        providers: [service_1.InstituteService, repository_1.InstituteSettingRepository, request_service_1.RequestService],
    })
], InstituteSettingsModule);
//# sourceMappingURL=module.js.map