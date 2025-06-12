import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { CitasServiciosService } from './citas_servicios.service';
import { CreateCitasServicioDto } from './dto/create-citas_servicio.dto';
import { UpdateCitasServicioDto } from './dto/update-citas_servicio.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@ApiTags('Citas Servicios')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('citas-servicios')
export class CitasServiciosController {
  constructor(private readonly citasServiciosService: CitasServiciosService) {}

  @Post()
  create(@Body() createCitasServicioDto: CreateCitasServicioDto) {
    return this.citasServiciosService.create(createCitasServicioDto);
  }

  @Get()
  findAll() {
    return this.citasServiciosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.citasServiciosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCitasServicioDto: UpdateCitasServicioDto) {
    return this.citasServiciosService.update(+id, updateCitasServicioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.citasServiciosService.remove(+id);
  }
}
