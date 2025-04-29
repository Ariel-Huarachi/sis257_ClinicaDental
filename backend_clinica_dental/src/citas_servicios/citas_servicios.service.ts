import { Injectable } from '@nestjs/common';
import { CreateCitasServicioDto } from './dto/create-citas_servicio.dto';
import { UpdateCitasServicioDto } from './dto/update-citas_servicio.dto';

@Injectable()
export class CitasServiciosService {
  create(createCitasServicioDto: CreateCitasServicioDto) {
    return 'This action adds a new citasServicio';
  }

  findAll() {
    return `This action returns all citasServicios`;
  }

  findOne(id: number) {
    return `This action returns a #${id} citasServicio`;
  }

  update(id: number, updateCitasServicioDto: UpdateCitasServicioDto) {
    return `This action updates a #${id} citasServicio`;
  }

  remove(id: number) {
    return `This action removes a #${id} citasServicio`;
  }
}
