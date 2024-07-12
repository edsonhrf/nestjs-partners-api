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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpotsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const client_1 = require("@prisma/client");
let SpotsService = class SpotsService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async create(createSpotDto) {
        const event = await this.prismaService.event.findFirst({
            where: {
                id: createSpotDto.eventId,
            },
        });
        if (!event) {
            throw new Error('Event not found!');
        }
        return this.prismaService.spot.create({
            data: {
                ...createSpotDto,
                status: client_1.SpotStatus.available,
            },
        });
    }
    findAll(eventId) {
        return this.prismaService.spot.findMany({
            where: {
                eventId,
            },
        });
    }
    findOne(eventId, spotName) {
        return this.prismaService.spot.findFirst({
            where: {
                name: spotName,
                eventId,
            },
        });
    }
    async update(eventId, spotName, updateSpotDto) {
        const spot = await this.prismaService.spot.findFirst({
            where: {
                name: spotName,
                eventId: eventId,
            },
        });
        if (!spot) {
            throw new common_1.NotFoundException(`Spot with name ${spotName} not found`);
        }
        return this.prismaService.spot.update({
            where: {
                id: spot.id,
            },
            data: updateSpotDto,
        });
    }
    async remove(eventId, spotName) {
        const spot = await this.prismaService.spot.findFirst({
            where: {
                name: spotName,
                eventId: eventId,
            },
        });
        if (!spot) {
            throw new common_1.NotFoundException(`Spot with name ${spotName} not found`);
        }
        return this.prismaService.spot.delete({
            where: {
                id: spot.id,
            },
        });
    }
};
exports.SpotsService = SpotsService;
exports.SpotsService = SpotsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], SpotsService);
//# sourceMappingURL=spots.service.js.map