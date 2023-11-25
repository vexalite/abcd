"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Authguard_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Authguard = void 0;
const common_1 = require("@nestjs/common");
let Authguard = Authguard_1 = class Authguard {
    constructor() {
        this.logger = new common_1.Logger(Authguard_1.name);
    }
    canActivate(context) {
        this.logger.log(Authguard_1.name);
        const request = context.switchToHttp().getRequest();
        const authorizationHeader = request.headers['authorization'];
        if (!authorizationHeader) {
            this.logger.error('Authorization header not present in the request');
            return false;
        }
        else {
            return true;
        }
    }
};
exports.Authguard = Authguard;
exports.Authguard = Authguard = Authguard_1 = __decorate([
    (0, common_1.Injectable)()
], Authguard);
//# sourceMappingURL=auth.js.map