import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
} from '@nestjs/common';
import { SpotsService } from '@app/core/spots/spots.service';
import { CreateSpotRequest } from './request/create-spot.request';
import { UpdateSpotRequest } from './request/update-spot.request';

@Controller('events/:eventId/spots')
export class SpotsController {
  constructor(private readonly spotsService: SpotsService) {}

  @Post()
  create(
    @Body() createSpotRequest: CreateSpotRequest,
    @Param('eventId') eventId: string,
  ) {
    return this.spotsService.create({
      ...createSpotRequest,
      eventId,
    });
  }

  @Get()
  findAll(@Param('eventId') eventId: string) {
    return this.spotsService.findAll(eventId);
  }

  @Get(':spotName')
  findOne(
    @Param('spotName') spotName: string,
    @Param('eventId') eventId: string,
  ) {
    return this.spotsService.findOne(eventId, spotName);
  }

  @Patch(':spotName')
  update(
    @Param('spotName') spotName: string,
    @Param('eventId') eventId: string,
    @Body() updateSpotRequest: UpdateSpotRequest,
  ) {
    return this.spotsService.update(eventId, spotName, updateSpotRequest);
  }

  @HttpCode(204)
  @Delete(':spotName')
  remove(
    @Param('spotName') spotName: string,
    @Param('eventId') eventId: string,
  ) {
    return this.spotsService.remove(eventId, spotName);
  }
}
