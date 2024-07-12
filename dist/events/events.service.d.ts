import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { ReserveSpotDto } from './dto/reserve-spot.dto';
import { Prisma } from '@prisma/client';
export declare class EventsService {
    private prismaService;
    constructor(prismaService: PrismaService);
    create(createEventDto: CreateEventDto): Prisma.Prisma__EventClient<{
        id: string;
        name: string;
        description: string;
        date: Date;
        price: number;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): Prisma.PrismaPromise<{
        id: string;
        name: string;
        description: string;
        date: Date;
        price: number;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: string): Prisma.Prisma__EventClient<{
        id: string;
        name: string;
        description: string;
        date: Date;
        price: number;
        createdAt: Date;
        updatedAt: Date;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: string, updateEventDto: UpdateEventDto): Prisma.Prisma__EventClient<{
        id: string;
        name: string;
        description: string;
        date: Date;
        price: number;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: string): Prisma.Prisma__EventClient<{
        id: string;
        name: string;
        description: string;
        date: Date;
        price: number;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    removeAll(): Promise<Prisma.BatchPayload>;
    reserveSpot(dto: ReserveSpotDto & {
        eventId: string;
    }): Promise<{
        id: string;
        email: string;
        ticketKind: import(".prisma/client").$Enums.TicketKind;
        createdAt: Date;
        updatedAt: Date;
        spotId: string;
    }[]>;
}
