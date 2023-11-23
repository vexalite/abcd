"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const module_1 = require("./books/module");
const mongoose_1 = require("@nestjs/mongoose");
const config_1 = require("@nestjs/config");
const module_2 = require("./book-institute-relation/module");
const module_3 = require("./instituteSettings/module");
const module_4 = require("./reservations/module");
const module_5 = require("./search/module");
const request_service_1 = require("./request.service");
const auth_1 = require("./middleware/auth");
const core_1 = require("@nestjs/core");
const auth_2 = require("./guards/auth");
const logging_1 = require("./interceptors/logging");
const http_exception_1 = require("./filters/http-exception");
let AppModule = class AppModule {
    configure(consumer) {
        consumer
            .apply(auth_1.AuthenticationMiddleware)
            .forRoutes('*');
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: '.env',
                isGlobal: true,
            }),
            mongoose_1.MongooseModule.forRoot(process.env.MONGODB_URI),
            module_1.BooksModule,
            module_2.BookInstituteRelationModule,
            module_3.InstituteSettingsModule,
            module_4.ReservationsModule,
            module_5.SearchModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, request_service_1.RequestService, {
                provide: core_1.APP_GUARD,
                useClass: auth_2.Authguard
            }, {
                provide: core_1.APP_INTERCEPTOR,
                scope: common_1.Scope.REQUEST,
                useClass: logging_1.LoggingInterceptor
            }, {
                provide: core_1.APP_FILTER,
                useClass: http_exception_1.exceptionFilter
            }
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map