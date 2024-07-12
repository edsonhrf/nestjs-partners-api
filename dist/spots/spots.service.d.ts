import { CreateSpotDto } from './dto/create-spot.dto';
import { UpdateSpotDto } from './dto/update-spot.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class SpotsService {
    private prismaService;
    constructor(prismaService: PrismaService);
    create(createSpotDto: CreateSpotDto & {
        eventId: string;
    }): Promise<{
        id: string;
        name: string;
        status: import(".prisma/client").$Enums.SpotStatus;
        createdAt: Date;
        updatedAt: Date;
        eventId: string;
    }>;
    findAll(eventId: string): import(".prisma/client").Prisma.PrismaPromise<{
        id: string;
        name: string;
        status: import(".prisma/client").$Enums.SpotStatus;
        createdAt: Date;
        updatedAt: Date;
        eventId: string;
    }[]>;
    findOne(eventId: string, spotName: string): import(".prisma/client").Prisma.Prisma__SpotClient<{
        id: string;
        name: string;
        status: import(".prisma/client").$Enums.SpotStatus;
        createdAt: Date;
        updatedAt: Date;
        eventId: string;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(eventId: string, spotName: string, updateSpotDto: UpdateSpotDto): Promise<{
        id: string;
        name: string;
        status: import(".prisma/client").$Enums.SpotStatus;
        createdAt: Date;
        updatedAt: Date;
        eventId: string;
    }>;
    remove(eventId: string, spotName: string): Promise<{
        id: string;
        name: string;
        status: import(".prisma/client").$Enums.SpotStatus;
        createdAt: Date;
        updatedAt: Date;
        eventId: string;
    }>;
}
