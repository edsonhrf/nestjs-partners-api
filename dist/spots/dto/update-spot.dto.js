"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSpotDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_spot_dto_1 = require("./create-spot.dto");
class UpdateSpotDto extends (0, mapped_types_1.PartialType)(create_spot_dto_1.CreateSpotDto) {
}
exports.UpdateSpotDto = UpdateSpotDto;
//# sourceMappingURL=update-spot.dto.js.map