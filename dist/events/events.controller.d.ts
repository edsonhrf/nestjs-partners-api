import { EventsService } from './events.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { ReserveSpotDto } from './dto/reserve-spot.dto';
export declare class EventsController {
    private readonly eventsService;
    constructor(eventsService: EventsService);
    create(createEventDto: CreateEventDto): import(".prisma/client").Prisma.Prisma__EventClient<{
        id: string;
        name: string;
        description: string;
        date: Date;
        price: number;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: string;
        name: string;
        description: string;
        date: Date;
        price: number;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__EventClient<{
        id: string;
        name: string;
        description: string;
        date: Date;
        price: number;
        createdAt: Date;
        updatedAt: Date;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: string, updateEventDto: UpdateEventDto): import(".prisma/client").Prisma.Prisma__EventClient<{
        id: string;
        name: string;
        description: string;
        date: Date;
        price: number;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__EventClient<{
        id: string;
        name: string;
        description: string;
        date: Date;
        price: number;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    removeAll(): Promise<import(".prisma/client").Prisma.BatchPayload>;
    reserveSpots(dto: ReserveSpotDto, eventId: string): Promise<{
        id: string;
        email: string;
        ticketKind: import(".prisma/client").$Enums.TicketKind;
        createdAt: Date;
        updatedAt: Date;
        spotId: string;
    }[]>;
}
