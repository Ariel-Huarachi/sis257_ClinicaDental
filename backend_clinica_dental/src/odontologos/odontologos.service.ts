import { Injectable } from '@nestjs/common';
import { CreateOdontologoDto } from './dto/create-odontologo.dto';
import { UpdateOdontologoDto } from './dto/update-odontologo.dto';

@Injectable()
export class OdontologosService {
  create(createOdontologoDto: CreateOdontologoDto) {
    return 'This action adds a new odontologo';
  }

  findAll() {
    return `This action returns all odontologos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} odontologo`;
  }

  update(id: number, updateOdontologoDto: UpdateOdontologoDto) {
    return `This action updates a #${id} odontologo`;
  }

  remove(id: number) {
    return `This action removes a #${id} odontologo`;
  }
}
