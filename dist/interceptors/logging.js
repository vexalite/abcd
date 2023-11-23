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
var LoggingInterceptor_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggingInterceptor = void 0;
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
const request_service_1 = require("../request.service");
let LoggingInterceptor = LoggingInterceptor_1 = class LoggingInterceptor {
    constructor(requestService) {
        this.requestService = requestService;
        this.logger = new common_1.Logger(LoggingInterceptor_1.name);
    }
    intercept(context, next) {
        const request = context.switchToHttp().getRequest();
        const userAgent = request.get('user-agent') || '';
        const { ip, method, path: url } = request;
        this.logger.log(`
        ${method} ${url} ${userAgent} ${ip}: ${context.getClass().name} ${context.getHandler().name} invoked...`);
        this.logger.debug('instituteId:', this.requestService.getInstituteID());
        const now = Date.now();
        return next.handle().pipe((0, rxjs_1.tap)((res) => {
            const response = context.switchToHttp().getResponse();
            const { statusCode } = response;
            const contentLength = response.get('content-length');
            this.logger.log(`
                ${method} ${url} ${statusCode} ${contentLength} - ${userAgent} ${ip}: ${Date.now() - now}ms`);
            this.logger.debug('Response:', res);
        }));
    }
};
exports.LoggingInterceptor = LoggingInterceptor;
exports.LoggingInterceptor = LoggingInterceptor = LoggingInterceptor_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [request_service_1.RequestService])
], LoggingInterceptor);
//# sourceMappingURL=logging.js.map