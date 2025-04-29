import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OdontologosServiciosService } from './odontologos_servicios.service';
import { CreateOdontologosServicioDto } from './dto/create-odontologos_servicio.dto';
import { UpdateOdontologosServicioDto } from './dto/update-odontologos_servicio.dto';

@Controller('odontologos-servicios')
export class OdontologosServiciosController {
  constructor(private readonly odontologosServiciosService: OdontologosServiciosService) {}

  @Post()
  create(@Body() createOdontologosServicioDto: CreateOdontologosServicioDto) {
    return this.odontologosServiciosService.create(createOdontologosServicioDto);
  }

  @Get()
  findAll() {
    return this.odontologosServiciosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.odontologosServiciosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOdontologosServicioDto: UpdateOdontologosServicioDto) {
    return this.odontologosServiciosService.update(+id, updateOdontologosServicioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.odontologosServiciosService.remove(+id);
  }
}
