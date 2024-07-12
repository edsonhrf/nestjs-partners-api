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
exports.Partner1Module = void 0;
const common_1 = __webpack_require__(3);
const events_module_1 = __webpack_require__(4);
const spots_module_1 = __webpack_require__(16);
const config_1 = __webpack_require__(14);
const prisma_module_1 = __webpack_require__(22);
const auth_module_1 = __webpack_require__(23);
let Partner1Module = class Partner1Module {
};
exports.Partner1Module = Partner1Module;
exports.Partner1Module = Partner1Module = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ envFilePath: '.env.partner1', isGlobal: true }),
            prisma_module_1.PrismaModule,
            auth_module_1.AuthModule,
            events_module_1.EventsModule,
            spots_module_1.SpotsModule,
        ],
    })
], Partner1Module);


/***/ }),
/* 3 */
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),
/* 4 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EventsModule = void 0;
const common_1 = __webpack_require__(3);
const events_controller_1 = __webpack_require__(5);
const events_core_module_1 = __webpack_require__(15);
let EventsModule = class EventsModule {
};
exports.EventsModule = EventsModule;
exports.EventsModule = EventsModule = __decorate([
    (0, common_1.Module)({
        imports: [events_core_module_1.EventsCoreModule],
        controllers: [events_controller_1.EventsController],
    })
], EventsModule);


/***/ }),
/* 5 */
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
exports.EventsController = void 0;
const common_1 = __webpack_require__(3);
const events_service_1 = __webpack_require__(6);
const create_event_request_1 = __webpack_require__(9);
const update_event_request_1 = __webpack_require__(10);
const reserve_spot_request_1 = __webpack_require__(12);
const auth_guard_1 = __webpack_require__(13);
let EventsController = class EventsController {
    constructor(eventsService) {
        this.eventsService = eventsService;
    }
    create(createEventRequest) {
        return this.eventsService.create(createEventRequest);
    }
    findAll() {
        return this.eventsService.findAll();
    }
    findOne(id) {
        return this.eventsService.findOne(id);
    }
    update(id, updateEventRequest) {
        return this.eventsService.update(id, updateEventRequest);
    }
    remove(id) {
        return this.eventsService.remove(id);
    }
    removeAll() {
        return this.eventsService.removeAll();
    }
    reserveSpots(reserveRequest, eventId) {
        return this.eventsService.reserveSpot({ ...reserveRequest, eventId });
    }
};
exports.EventsController = EventsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof create_event_request_1.CreateEventRequest !== "undefined" && create_event_request_1.CreateEventRequest) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], EventsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EventsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EventsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_c = typeof update_event_request_1.UpdateEventRequest !== "undefined" && update_event_request_1.UpdateEventRequest) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], EventsController.prototype, "update", null);
__decorate([
    (0, common_1.HttpCode)(204),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EventsController.prototype, "remove", null);
__decorate([
    (0, common_1.HttpCode)(204),
    (0, common_1.Delete)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EventsController.prototype, "removeAll", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Post)(':id/reserve'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof reserve_spot_request_1.ReserveSpotRequest !== "undefined" && reserve_spot_request_1.ReserveSpotRequest) === "function" ? _d : Object, String]),
    __metadata("design:returntype", void 0)
], EventsController.prototype, "reserveSpots", null);
exports.EventsController = EventsController = __decorate([
    (0, common_1.Controller)('events'),
    __metadata("design:paramtypes", [typeof (_a = typeof events_service_1.EventsService !== "undefined" && events_service_1.EventsService) === "function" ? _a : Object])
], EventsController);


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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EventsService = void 0;
const common_1 = __webpack_require__(3);
const client_1 = __webpack_require__(7);
const prisma_service_1 = __webpack_require__(8);
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
/* 7 */
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),
/* 8 */
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
const client_1 = __webpack_require__(7);
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
/* 9 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateEventRequest = void 0;
class CreateEventRequest {
}
exports.CreateEventRequest = CreateEventRequest;


/***/ }),
/* 10 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateEventRequest = void 0;
const mapped_types_1 = __webpack_require__(11);
const create_event_request_1 = __webpack_require__(9);
class UpdateEventRequest extends (0, mapped_types_1.PartialType)(create_event_request_1.CreateEventRequest) {
}
exports.UpdateEventRequest = UpdateEventRequest;


/***/ }),
/* 11 */
/***/ ((module) => {

module.exports = require("@nestjs/mapped-types");

/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ReserveSpotRequest = void 0;
class ReserveSpotRequest {
}
exports.ReserveSpotRequest = ReserveSpotRequest;


/***/ }),
/* 13 */
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
const config_1 = __webpack_require__(14);
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
/* 14 */
/***/ ((module) => {

module.exports = require("@nestjs/config");

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
const events_service_1 = __webpack_require__(6);
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
exports.SpotsModule = void 0;
const common_1 = __webpack_require__(3);
const spots_controller_1 = __webpack_require__(17);
const spots_core_module_1 = __webpack_require__(21);
let SpotsModule = class SpotsModule {
};
exports.SpotsModule = SpotsModule;
exports.SpotsModule = SpotsModule = __decorate([
    (0, common_1.Module)({
        imports: [spots_core_module_1.SpotsCoreModule],
        controllers: [spots_controller_1.SpotsController],
    })
], SpotsModule);


/***/ }),
/* 17 */
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
exports.SpotsController = void 0;
const common_1 = __webpack_require__(3);
const spots_service_1 = __webpack_require__(18);
const create_spot_request_1 = __webpack_require__(19);
const update_spot_request_1 = __webpack_require__(20);
let SpotsController = class SpotsController {
    constructor(spotsService) {
        this.spotsService = spotsService;
    }
    create(createSpotRequest, eventId) {
        return this.spotsService.create({
            ...createSpotRequest,
            eventId,
        });
    }
    findAll(eventId) {
        return this.spotsService.findAll(eventId);
    }
    findOne(spotName, eventId) {
        return this.spotsService.findOne(eventId, spotName);
    }
    update(spotName, eventId, updateSpotRequest) {
        return this.spotsService.update(eventId, spotName, updateSpotRequest);
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
    __metadata("design:paramtypes", [typeof (_b = typeof create_spot_request_1.CreateSpotRequest !== "undefined" && create_spot_request_1.CreateSpotRequest) === "function" ? _b : Object, String]),
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
    __metadata("design:paramtypes", [String, String, typeof (_c = typeof update_spot_request_1.UpdateSpotRequest !== "undefined" && update_spot_request_1.UpdateSpotRequest) === "function" ? _c : Object]),
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
    __metadata("design:paramtypes", [typeof (_a = typeof spots_service_1.SpotsService !== "undefined" && spots_service_1.SpotsService) === "function" ? _a : Object])
], SpotsController);


/***/ }),
/* 18 */
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
const prisma_service_1 = __webpack_require__(8);
const client_1 = __webpack_require__(7);
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
/* 19 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateSpotRequest = void 0;
class CreateSpotRequest {
}
exports.CreateSpotRequest = CreateSpotRequest;


/***/ }),
/* 20 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateSpotRequest = void 0;
const mapped_types_1 = __webpack_require__(11);
const create_spot_request_1 = __webpack_require__(19);
class UpdateSpotRequest extends (0, mapped_types_1.PartialType)(create_spot_request_1.CreateSpotRequest) {
}
exports.UpdateSpotRequest = UpdateSpotRequest;


/***/ }),
/* 21 */
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
const spots_service_1 = __webpack_require__(18);
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
/* 22 */
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
const prisma_service_1 = __webpack_require__(8);
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
const partner1_module_1 = __webpack_require__(2);
async function bootstrap() {
    const app = await core_1.NestFactory.create(partner1_module_1.Partner1Module);
    await app.listen(3000);
}
bootstrap();

})();

/******/ })()
;