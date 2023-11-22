"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCatalogDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_book_dto_1 = require("./create-book.dto");
class UpdateCatalogDto extends (0, mapped_types_1.PartialType)(create_book_dto_1.BookDto) {
}
exports.UpdateCatalogDto = UpdateCatalogDto;
//# sourceMappingURL=update-book.dto.js.map