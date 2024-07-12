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
exports.EventsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const client_1 = require("@prisma/client");
let EventsService = class EventsService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    create(createEventDto) {
        return this.prismaService.event.create({
            data: {
                ...createEventDto,
                date: new Date(createEventDto.date),
            },
        });
    }
    findAll() {
        return this.prismaService.event.findMany();
    }
    findOne(id) {
        return this.prismaService.event.findUnique({
            where: { id },
        });
    }
    update(id, updateEventDto) {
        return this.prismaService.event.update({
            data: {
                ...updateEventDto,
                date: new Date(updateEventDto.date),
            },
            where: { id },
        });
    }
    remove(id) {
        return this.prismaService.event.delete({
            where: { id },
        });
    }
    async removeAll() {
        await this.prismaService.reservationHistory.deleteMany({});
        await this.prismaService.ticket.deleteMany({});
        await this.prismaService.spot.deleteMany({});
        return this.prismaService.event.deleteMany({});
    }
    async reserveSpot(dto) {
        const spots = await this.prismaService.spot.findMany({
            where: {
                eventId: dto.eventId,
                name: {
                    in: dto.spots,
                },
            },
        });
        if (spots.length !== dto.spots.length) {
            const foundSpotsName = spots.map((spot) => spot.name);
            const notFoundSpotsName = dto.spots.filter((spotName) => !foundSpotsName.includes(spotName));
            throw new Error(`Spots ${notFoundSpotsName.join(', ')} not found`);
        }
        try {
            const tickets = await this.prismaService.$transaction(async (prisma) => {
                await prisma.reservationHistory.createMany({
                    data: spots.map((spot) => ({
                        spotId: spot.id,
                        ticketKind: dto.ticket_kind,
                        email: dto.email,
                        status: client_1.TicketStatus.reserved,
                    })),
                });
                await prisma.spot.updateMany({
                    where: {
                        id: {
                            in: spots.map((spot) => spot.id),
                        },
                    },
                    data: {
                        status: client_1.SpotStatus.reserved,
                    },
                });
                const tickets = await Promise.all(spots.map((spot) => prisma.ticket.create({
                    data: {
                        spotId: spot.id,
                        ticketKind: dto.ticket_kind,
                        email: dto.email,
                    },
                })));
                return tickets;
            }, { isolationLevel: client_1.Prisma.TransactionIsolationLevel.ReadCommitted });
            return tickets;
        }
        catch (e) {
            if (e instanceof client_1.Prisma.PrismaClientKnownRequestError) {
                switch (e.code) {
                    case 'P2002':
                    case 'P2034':
                        throw new Error('Some spots are already reserved');
                }
            }
            throw e;
        }
    }
};
exports.EventsService = EventsService;
exports.EventsService = EventsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], EventsService);
//# sourceMappingURL=events.service.js.map