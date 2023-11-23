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
var AuthenticationMiddleware_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationMiddleware = void 0;
const common_1 = require("@nestjs/common");
const request_service_1 = require("../request.service");
let AuthenticationMiddleware = AuthenticationMiddleware_1 = class AuthenticationMiddleware {
    constructor(requestService) {
        this.requestService = requestService;
        this.logger = new common_1.Logger(AuthenticationMiddleware_1.name);
    }
    use(req, res, next) {
        this.logger.log(AuthenticationMiddleware_1.name);
        const instituteId = '123';
        this.requestService.setInstituteId(instituteId);
        next();
    }
};
exports.AuthenticationMiddleware = AuthenticationMiddleware;
exports.AuthenticationMiddleware = AuthenticationMiddleware = AuthenticationMiddleware_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [request_service_1.RequestService])
], AuthenticationMiddleware);
//# sourceMappingURL=auth.js.map