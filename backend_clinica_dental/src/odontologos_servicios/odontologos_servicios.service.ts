import { Injectable } from '@nestjs/common';
import { CreateOdontologosServicioDto } from './dto/create-odontologos_servicio.dto';
import { UpdateOdontologosServicioDto } from './dto/update-odontologos_servicio.dto';

@Injectable()
export class OdontologosServiciosService {
  create(createOdontologosServicioDto: CreateOdontologosServicioDto) {
    return 'This action adds a new odontologosServicio';
  }

  findAll() {
    return `This action returns all odontologosServicios`;
  }

  findOne(id: number) {
    return `This action returns a #${id} odontologosServicio`;
  }

  update(id: number, updateOdontologosServicioDto: UpdateOdontologosServicioDto) {
    return `This action updates a #${id} odontologosServicio`;
  }

  remove(id: number) {
    return `This action removes a #${id} odontologosServicio`;
  }
}
