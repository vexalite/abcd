"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var exceptionFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.exceptionFilter = void 0;
const common_1 = require("@nestjs/common");
let exceptionFilter = exceptionFilter_1 = class exceptionFilter {
    constructor() {
        this.logger = new common_1.Logger(exceptionFilter_1.name);
    }
    catch(exception, host) {
        this.logger.log(exceptionFilter_1.name);
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        const status = exception && typeof exception.getStatus === 'function' ? exception.getStatus() : 500;
        const message = exception.message || 'Internal Server Error';
        response.status(status).json({
            statusCode: status,
            message: message,
            timestamp: new Date().toISOString(),
            path: request.url
        });
    }
};
exports.exceptionFilter = exceptionFilter;
exports.exceptionFilter = exceptionFilter = exceptionFilter_1 = __decorate([
    (0, common_1.Catch)()
], exceptionFilter);
//# sourceMappingURL=http-exception.js.map