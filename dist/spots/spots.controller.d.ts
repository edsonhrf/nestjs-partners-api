import { SpotsService } from './spots.service';
import { CreateSpotDto } from './dto/create-spot.dto';
import { UpdateSpotDto } from './dto/update-spot.dto';
export declare class SpotsController {
    private readonly spotsService;
    constructor(spotsService: SpotsService);
    create(createSpotDto: CreateSpotDto, eventId: string): Promise<{
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
    findOne(spotName: string, eventId: string): import(".prisma/client").Prisma.Prisma__SpotClient<{
        id: string;
        name: string;
        status: import(".prisma/client").$Enums.SpotStatus;
        createdAt: Date;
        updatedAt: Date;
        eventId: string;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(spotName: string, eventId: string, updateSpotDto: UpdateSpotDto): Promise<{
        id: string;
        name: string;
        status: import(".prisma/client").$Enums.SpotStatus;
        createdAt: Date;
        updatedAt: Date;
        eventId: string;
    }>;
    remove(spotName: string, eventId: string): Promise<{
        id: string;
        name: string;
        status: import(".prisma/client").$Enums.SpotStatus;
        createdAt: Date;
        updatedAt: Date;
        eventId: string;
    }>;
}
