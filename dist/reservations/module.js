"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationsModule = void 0;
const common_1 = require("@nestjs/common");
const service_1 = require("./service");
const controller_1 = require("./controller");
const mongoose_1 = require("@nestjs/mongoose");
const schema_1 = require("./schema");
const repository_1 = require("./repository");
const repository_2 = require("../book-institute-relation/repository");
const schema_2 = require("../book-institute-relation/schema");
const schema_3 = require("../instituteSettings/schema");
const repository_3 = require("../instituteSettings/repository");
const request_service_1 = require("../request.service");
const auth_1 = require("../middleware/auth");
let ReservationsModule = class ReservationsModule {
    configure(consumer) {
        consumer
            .apply(auth_1.AuthenticationMiddleware)
            .forRoutes({ path: "reservations/all", method: common_1.RequestMethod.GET }, { path: "reservations/book/:bookid", method: common_1.RequestMethod.GET }, { path: "reservations/patron/:patronid", method: common_1.RequestMethod.GET }, { path: "reservations/h/book/:bookid", method: common_1.RequestMethod.GET }, { path: "reservations/h/patron/:patronid", method: common_1.RequestMethod.GET }, { path: "reservations", method: common_1.RequestMethod.POST });
    }
};
exports.ReservationsModule = ReservationsModule;
exports.ReservationsModule = ReservationsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: 'Reservation', schema: schema_1.ReservationsSchema },
            ]),
            mongoose_1.MongooseModule.forFeature([
                { name: 'BookInstitute', schema: schema_2.BookInstituteSchema },
            ]),
            mongoose_1.MongooseModule.forFeature([
                { name: 'instituteSettings', schema: schema_3.InstituteSettingsSchema },
            ]),
        ],
        controllers: [controller_1.ReservationsController],
        providers: [
            service_1.ReservationsService,
            repository_1.ReservationRepository,
            repository_2.BookInstitutesRepository,
            repository_3.InstituteSettingRepository,
            request_service_1.RequestService
        ],
    })
], ReservationsModule);
//# sourceMappingURL=module.js.map