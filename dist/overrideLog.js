"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomLogger = void 0;
const common_1 = require("@nestjs/common");
class CustomLogger extends common_1.ConsoleLogger {
    log(message) {
        if (!this.shouldDisableLog(message)) {
            super.log(message);
        }
    }
    shouldDisableLog(message) {
        const messagesToDisable = [
            'Starting Nest application',
            'MongooseModule dependencies initialized',
            'Mapped',
            'Nest application successfully started',
        ];
        return messagesToDisable.some(pattern => message.includes(pattern));
    }
}
exports.CustomLogger = CustomLogger;
//# sourceMappingURL=overrideLog.js.map