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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpotsController = void 0;
const common_1 = require("@nestjs/common");
const spots_service_1 = require("./spots.service");
const create_spot_dto_1 = require("./dto/create-spot.dto");
const update_spot_dto_1 = require("./dto/update-spot.dto");
let SpotsController = class SpotsController {
    constructor(spotsService) {
        this.spotsService = spotsService;
    }
    create(createSpotDto, eventId) {
        return this.spotsService.create({
            ...createSpotDto,
            eventId,
        });
    }
    findAll(eventId) {
        return this.spotsService.findAll(eventId);
    }
    findOne(spotName, eventId) {
        return this.spotsService.findOne(eventId, spotName);
    }
    update(spotName, eventId, updateSpotDto) {
        return this.spotsService.update(eventId, spotName, updateSpotDto);
    }
    remove(spotName, eventId) {
        return this.spotsService.remove(eventId, spotName);
    }
};
exports.SpotsController = SpotsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('eventId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_spot_dto_1.CreateSpotDto, String]),
    __metadata("design:returntype", void 0)
], SpotsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Param)('eventId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SpotsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':spotName'),
    __param(0, (0, common_1.Param)('spotName')),
    __param(1, (0, common_1.Param)('eventId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], SpotsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':spotName'),
    __param(0, (0, common_1.Param)('spotName')),
    __param(1, (0, common_1.Param)('eventId')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, update_spot_dto_1.UpdateSpotDto]),
    __metadata("design:returntype", void 0)
], SpotsController.prototype, "update", null);
__decorate([
    (0, common_1.HttpCode)(204),
    (0, common_1.Delete)(':spotName'),
    __param(0, (0, common_1.Param)('spotName')),
    __param(1, (0, common_1.Param)('eventId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], SpotsController.prototype, "remove", null);
exports.SpotsController = SpotsController = __decorate([
    (0, common_1.Controller)('events/:eventId/spots'),
    __metadata("design:paramtypes", [spots_service_1.SpotsService])
], SpotsController);
//# sourceMappingURL=spots.controller.js.map