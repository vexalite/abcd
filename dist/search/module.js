"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchModule = void 0;
const common_1 = require("@nestjs/common");
const service_1 = require("./service");
const controller_1 = require("./controller");
const mongoose_1 = require("@nestjs/mongoose");
const schema_1 = require("../book-institute-relation/schema");
const repository_1 = require("./repository");
const schema_2 = require("../books/schema");
const repository_2 = require("../books/repository");
const request_service_1 = require("../request.service");
const auth_1 = require("../middleware/auth");
let SearchModule = class SearchModule {
    configure(consumer) {
        consumer
            .apply(auth_1.AuthenticationMiddleware)
            .forRoutes({ path: 'search/:text', method: common_1.RequestMethod.GET });
    }
};
exports.SearchModule = SearchModule;
exports.SearchModule = SearchModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'Book', schema: schema_2.BookSchema }]),
            mongoose_1.MongooseModule.forFeature([
                { name: 'BookInstitute', schema: schema_1.BookInstituteSchema },
            ]),
        ],
        controllers: [controller_1.SearchController],
        providers: [service_1.SearchService, repository_1.SearchRepository, repository_2.BooksRepository, request_service_1.RequestService],
    })
], SearchModule);
//# sourceMappingURL=module.js.map