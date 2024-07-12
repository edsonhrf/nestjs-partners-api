/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),
/* 2 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Partner2Module = void 0;
const common_1 = __webpack_require__(3);
const config_1 = __webpack_require__(4);
const eventos_module_1 = __webpack_require__(5);
const prisma_module_1 = __webpack_require__(16);
const lugares_module_1 = __webpack_require__(17);
const auth_module_1 = __webpack_require__(23);
let Partner2Module = class Partner2Module {
};
exports.Partner2Module = Partner2Module;
exports.Partner2Module = Partner2Module = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: '.env.partner2',
                isGlobal: true,
            }),
            auth_module_1.AuthModule,
            prisma_module_1.PrismaModule,
            eventos_module_1.EventosModule,
            lugares_module_1.LugaresModule,
        ],
    })
], Partner2Module);


/***/ }),
/* 3 */
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),
/* 4 */
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),
/* 5 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EventosModule = void 0;
const common_1 = __webpack_require__(3);
const eventos_controller_1 = __webpack_require__(6);
const events_core_module_1 = __webpack_require__(15);
let EventosModule = class EventosModule {
};
exports.EventosModule = EventosModule;
exports.EventosModule = EventosModule = __decorate([
    (0, common_1.Module)({
        imports: [events_core_module_1.EventsCoreModule],
        controllers: [eventos_controller_1.EventosController],
    })
], EventosModule);


/***/ }),
/* 6 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EventosController = void 0;
const common_1 = __webpack_require__(3);
const events_service_1 = __webpack_require__(7);
const criar_evento_request_1 = __webpack_require__(10);
const atualizar_evento_request_1 = __webpack_require__(11);
const reservar_lugar_request_1 = __webpack_require__(13);
const client_1 = __webpack_require__(8);
const auth_guard_1 = __webpack_require__(14);
let EventosController = class EventosController {
    constructor(eventsService) {
        this.eventsService = eventsService;
    }
    create(criarEventoRequest) {
        return this.eventsService.create({
            name: criarEventoRequest.nome,
            description: criarEventoRequest.descricao,
            date: criarEventoRequest.data,
            price: criarEventoRequest.preco,
        });
    }
    findAll() {
        return this.eventsService.findAll();
    }
    findOne(id) {
        return this.eventsService.findOne(id);
    }
    update(id, atualizarEventoRequest) {
        return this.eventsService.update(id, {
            name: atualizarEventoRequest.nome,
            description: atualizarEventoRequest.descricao,
            date: atualizarEventoRequest.data,
            price: atualizarEventoRequest.preco,
        });
    }
    remove(id) {
        return this.eventsService.remove(id);
    }
    removeAll() {
        return this.eventsService.removeAll();
    }
    reserveSpots(reservarLugarRequest, eventId) {
        return this.eventsService.reserveSpot({
            eventId,
            spots: reservarLugarRequest.lugares,
            ticket_kind: reservarLugarRequest.tipo_ingresso === 'inteira'
                ? client_1.TicketKind.full
                : client_1.TicketKind.half,
            email: reservarLugarRequest.email,
        });
    }
};
exports.EventosController = EventosController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof criar_evento_request_1.CriarEventoRequest !== "undefined" && criar_evento_request_1.CriarEventoRequest) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], EventosController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EventosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EventosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_c = typeof atualizar_evento_request_1.AtualizarEventoRequest !== "undefined" && atualizar_evento_request_1.AtualizarEventoRequest) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], EventosController.prototype, "update", null);
__decorate([
    (0, common_1.HttpCode)(204),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EventosController.prototype, "remove", null);
__decorate([
    (0, common_1.HttpCode)(204),
    (0, common_1.Delete)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EventosController.prototype, "removeAll", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Post)(':id/reservar'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof reservar_lugar_request_1.ReservarLugarRequest !== "undefined" && reservar_lugar_request_1.ReservarLugarRequest) === "function" ? _d : Object, String]),
    __metadata("design:returntype", void 0)
], EventosController.prototype, "reserveSpots", null);
exports.EventosController = EventosController = __decorate([
    (0, common_1.Controller)('eventos'),
    __metadata("design:paramtypes", [typeof (_a = typeof events_service_1.EventsService !== "undefined" && events_service_1.EventsService) === "function" ? _a : Object])
], EventosController);


/***/ }),
/* 7 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EventsService = void 0;
const common_1 = __webpack_require__(3);
const client_1 = __webpack_require__(8);
const prisma_service_1 = __webpack_require__(9);
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
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object])
], EventsService);


/***/ }),
/* 8 */
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),
/* 9 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PrismaService = void 0;
const common_1 = __webpack_require__(3);
const client_1 = __webpack_require__(8);
let PrismaService = class PrismaService extends client_1.PrismaClient {
    async onModuleInit() {
        await this.$connect();
    }
};
exports.PrismaService = PrismaService;
exports.PrismaService = PrismaService = __decorate([
    (0, common_1.Injectable)()
], PrismaService);


/***/ }),
/* 10 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CriarEventoRequest = void 0;
class CriarEventoRequest {
}
exports.CriarEventoRequest = CriarEventoRequest;


/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AtualizarEventoRequest = void 0;
const mapped_types_1 = __webpack_require__(12);
const criar_evento_request_1 = __webpack_require__(10);
class AtualizarEventoRequest extends (0, mapped_types_1.PartialType)(criar_evento_request_1.CriarEventoRequest) {
}
exports.AtualizarEventoRequest = AtualizarEventoRequest;


/***/ }),
/* 12 */
/***/ ((module) => {

module.exports = require("@nestjs/mapped-types");

/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ReservarLugarRequest = void 0;
class ReservarLugarRequest {
}
exports.ReservarLugarRequest = ReservarLugarRequest;


/***/ }),
/* 14 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthGuard = void 0;
const common_1 = __webpack_require__(3);
const config_1 = __webpack_require__(4);
let AuthGuard = class AuthGuard {
    constructor(configService) {
        this.configService = configService;
    }
    canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const token = request.headers['x-api-token'];
        return token === this.configService.get('API_TOKEN');
    }
};
exports.AuthGuard = AuthGuard;
exports.AuthGuard = AuthGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object])
], AuthGuard);


/***/ }),
/* 15 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EventsCoreModule = void 0;
const common_1 = __webpack_require__(3);
const events_service_1 = __webpack_require__(7);
let EventsCoreModule = class EventsCoreModule {
};
exports.EventsCoreModule = EventsCoreModule;
exports.EventsCoreModule = EventsCoreModule = __decorate([
    (0, common_1.Module)({
        providers: [events_service_1.EventsService],
        exports: [events_service_1.EventsService],
    })
], EventsCoreModule);


/***/ }),
/* 16 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PrismaModule = void 0;
const common_1 = __webpack_require__(3);
const prisma_service_1 = __webpack_require__(9);
let PrismaModule = class PrismaModule {
};
exports.PrismaModule = PrismaModule;
exports.PrismaModule = PrismaModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        providers: [prisma_service_1.PrismaService],
        exports: [prisma_service_1.PrismaService],
    })
], PrismaModule);


/***/ }),
/* 17 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LugaresModule = void 0;
const common_1 = __webpack_require__(3);
const spots_core_module_1 = __webpack_require__(18);
const lugares_controller_1 = __webpack_require__(20);
let LugaresModule = class LugaresModule {
};
exports.LugaresModule = LugaresModule;
exports.LugaresModule = LugaresModule = __decorate([
    (0, common_1.Module)({
        imports: [spots_core_module_1.SpotsCoreModule],
        controllers: [lugares_controller_1.LugaresController],
    })
], LugaresModule);


/***/ }),
/* 18 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SpotsCoreModule = void 0;
const common_1 = __webpack_require__(3);
const spots_service_1 = __webpack_require__(19);
let SpotsCoreModule = class SpotsCoreModule {
};
exports.SpotsCoreModule = SpotsCoreModule;
exports.SpotsCoreModule = SpotsCoreModule = __decorate([
    (0, common_1.Module)({
        providers: [spots_service_1.SpotsService],
        exports: [spots_service_1.SpotsService],
    })
], SpotsCoreModule);


/***/ }),
/* 19 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SpotsService = void 0;
const common_1 = __webpack_require__(3);
const prisma_service_1 = __webpack_require__(9);
const client_1 = __webpack_require__(8);
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
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaService !== "undefined" && prisma_service_1.PrismaService) === "function" ? _a : Object])
], SpotsService);


/***/ }),
/* 20 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LugaresController = void 0;
const common_1 = __webpack_require__(3);
const spots_service_1 = __webpack_require__(19);
const criar_lugar_request_1 = __webpack_require__(21);
const atualizar_lugar_request_1 = __webpack_require__(22);
let LugaresController = class LugaresController {
    constructor(spotsService) {
        this.spotsService = spotsService;
    }
    create(criarLugarRequest, eventoId) {
        return this.spotsService.create({
            name: criarLugarRequest.nome,
            eventId: eventoId,
        });
    }
    findAll(eventoId) {
        return this.spotsService.findAll(eventoId);
    }
    findOne(nomeLugar, eventoId) {
        return this.spotsService.findOne(eventoId, nomeLugar);
    }
    update(nomeLugar, eventoId, atualizarLugarRequest) {
        return this.spotsService.update(eventoId, nomeLugar, {
            name: atualizarLugarRequest.nome,
        });
    }
    remove(nomeLugar, eventoId) {
        return this.spotsService.remove(eventoId, nomeLugar);
    }
};
exports.LugaresController = LugaresController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('eventoId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof criar_lugar_request_1.CriarLugarRequest !== "undefined" && criar_lugar_request_1.CriarLugarRequest) === "function" ? _b : Object, String]),
    __metadata("design:returntype", void 0)
], LugaresController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Param)('eventoId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LugaresController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':nomeLugar'),
    __param(0, (0, common_1.Param)('nomeLugar')),
    __param(1, (0, common_1.Param)('eventoId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], LugaresController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':nomeLugar'),
    __param(0, (0, common_1.Param)('nomeLugar')),
    __param(1, (0, common_1.Param)('eventoId')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, typeof (_c = typeof atualizar_lugar_request_1.AtualizarLugarRequest !== "undefined" && atualizar_lugar_request_1.AtualizarLugarRequest) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], LugaresController.prototype, "update", null);
__decorate([
    (0, common_1.HttpCode)(204),
    (0, common_1.Delete)(':nomeLugar'),
    __param(0, (0, common_1.Param)('nomeLugar')),
    __param(1, (0, common_1.Param)('eventoId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], LugaresController.prototype, "remove", null);
exports.LugaresController = LugaresController = __decorate([
    (0, common_1.Controller)('eventos/:eventoId/lugares'),
    __metadata("design:paramtypes", [typeof (_a = typeof spots_service_1.SpotsService !== "undefined" && spots_service_1.SpotsService) === "function" ? _a : Object])
], LugaresController);


/***/ }),
/* 21 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CriarLugarRequest = void 0;
class CriarLugarRequest {
}
exports.CriarLugarRequest = CriarLugarRequest;


/***/ }),
/* 22 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AtualizarLugarRequest = void 0;
const mapped_types_1 = __webpack_require__(12);
const criar_lugar_request_1 = __webpack_require__(21);
class AtualizarLugarRequest extends (0, mapped_types_1.PartialType)(criar_lugar_request_1.CriarLugarRequest) {
}
exports.AtualizarLugarRequest = AtualizarLugarRequest;


/***/ }),
/* 23 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthModule = void 0;
const common_1 = __webpack_require__(3);
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({})
], AuthModule);


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(1);
const partner2_module_1 = __webpack_require__(2);
async function bootstrap() {
    const app = await core_1.NestFactory.create(partner2_module_1.Partner2Module);
    await app.listen(3001);
}
bootstrap();

})();

/******/ })()
;