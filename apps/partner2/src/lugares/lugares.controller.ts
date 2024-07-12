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
import { CriarLugarRequest } from './request/criar-lugar.request';
import { AtualizarLugarRequest } from './request/atualizar-lugar.request';

@Controller('eventos/:eventoId/lugares')
export class LugaresController {
  constructor(private readonly spotsService: SpotsService) {}

  @Post()
  create(
    @Body() criarLugarRequest: CriarLugarRequest,
    @Param('eventoId') eventoId: string,
  ) {
    return this.spotsService.create({
      name: criarLugarRequest.nome,
      eventId: eventoId,
    });
  }

  @Get()
  findAll(@Param('eventoId') eventoId: string) {
    return this.spotsService.findAll(eventoId);
  }

  @Get(':nomeLugar')
  findOne(
    @Param('nomeLugar') nomeLugar: string,
    @Param('eventoId') eventoId: string,
  ) {
    return this.spotsService.findOne(eventoId, nomeLugar);
  }

  @Patch(':nomeLugar')
  update(
    @Param('nomeLugar') nomeLugar: string,
    @Param('eventoId') eventoId: string,
    @Body() atualizarLugarRequest: AtualizarLugarRequest,
  ) {
    return this.spotsService.update(eventoId, nomeLugar, {
      name: atualizarLugarRequest.nome,
    });
  }

  @HttpCode(204)
  @Delete(':nomeLugar')
  remove(
    @Param('nomeLugar') nomeLugar: string,
    @Param('eventoId') eventoId: string,
  ) {
    return this.spotsService.remove(eventoId, nomeLugar);
  }
}
