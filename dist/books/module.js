"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooksModule = void 0;
const common_1 = require("@nestjs/common");
const service_1 = require("./service");
const controller_1 = require("./controller");
const mongoose_1 = require("@nestjs/mongoose");
const schema_1 = require("./schema");
const repository_1 = require("./repository");
const service_2 = require("../book-institute-relation/service");
const repository_2 = require("../book-institute-relation/repository");
const schema_2 = require("../book-institute-relation/schema");
const auth_1 = require("../middleware/auth");
const request_service_1 = require("../request.service");
const repository_3 = require("../instituteSettings/repository");
const schema_3 = require("../instituteSettings/schema");
const repository_4 = require("../reservations/repository");
const schema_4 = require("../reservations/schema");
let BooksModule = class BooksModule {
    configure(consumer) {
        consumer
            .apply(auth_1.AuthenticationMiddleware)
            .forRoutes({ path: "books/:isbn", method: common_1.RequestMethod.POST }, { path: "books", method: common_1.RequestMethod.GET }, { path: "books/totalbooks", method: common_1.RequestMethod.GET });
    }
};
exports.BooksModule = BooksModule;
exports.BooksModule = BooksModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'Book', schema: schema_1.BookSchema }]),
            mongoose_1.MongooseModule.forFeature([
                { name: 'Reservation', schema: schema_4.ReservationsSchema },
            ]),
            mongoose_1.MongooseModule.forFeature([
                { name: 'BookInstitute', schema: schema_2.BookInstituteSchema },
            ]),
            mongoose_1.MongooseModule.forFeature([
                { name: 'instituteSettings', schema: schema_3.InstituteSettingsSchema },
            ])
        ],
        controllers: [controller_1.BooksController],
        providers: [
            service_1.BooksService,
            repository_1.BooksRepository,
            service_2.BookInstitutesService,
            repository_2.BookInstitutesRepository,
            repository_3.InstituteSettingRepository,
            request_service_1.RequestService,
            repository_4.ReservationRepository
        ],
    })
], BooksModule);
//# sourceMappingURL=module.js.map