import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSpotDto } from './dto/create-spot.dto';
import { UpdateSpotDto } from './dto/update-spot.dto';
import { PrismaService } from '../prisma/prisma.service';
import { SpotStatus } from '@prisma/client';

@Injectable()
export class SpotsService {
  constructor(private prismaService: PrismaService) {}

  async create(createSpotDto: CreateSpotDto & { eventId: string }) {
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
        status: SpotStatus.available,
      },
    });
  }

  findAll(eventId: string) {
    return this.prismaService.spot.findMany({
      where: {
        eventId,
      },
    });
  }

  findOne(eventId: string, spotName: string) {
    return this.prismaService.spot.findFirst({
      where: {
        name: spotName,
        eventId,
      },
    });
  }

  async update(
    eventId: string,
    spotName: string,
    updateSpotDto: UpdateSpotDto,
  ) {
    // First, find the spot with eventId and spotName
    const spot = await this.prismaService.spot.findFirst({
      where: {
        name: spotName,
        eventId: eventId,
      },
    });

    // If the spot don't find, create an exception
    if (!spot) {
      throw new NotFoundException(`Spot with name ${spotName} not found`);
    }

    // Update the spot using the ID founded
    return this.prismaService.spot.update({
      where: {
        id: spot.id, // Use the unique ID of founded spot
      },
      data: updateSpotDto,
    });
  }

  async remove(eventId: string, spotName: string) {
    const spot = await this.prismaService.spot.findFirst({
      where: {
        name: spotName,
        eventId: eventId,
      },
    });

    if (!spot) {
      throw new NotFoundException(`Spot with name ${spotName} not found`);
    }

    return this.prismaService.spot.delete({
      where: {
        id: spot.id,
      },
    });
  }
}
