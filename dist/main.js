"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const overrideLog_1 = require("./overrideLog");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { logger: new overrideLog_1.CustomLogger() });
    const logger = new common_1.Logger();
    await app.listen(process.env.PORT || 3000, "0.0.0.0");
}
bootstrap();
//# sourceMappingURL=main.js.map