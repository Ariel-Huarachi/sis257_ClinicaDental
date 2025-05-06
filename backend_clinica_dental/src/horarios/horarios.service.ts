import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateHorarioDto } from './dto/create-horario.dto';
import { UpdateHorarioDto } from './dto/update-horario.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Horario } from './entities/horario.entity';

@Injectable()
export class HorariosService {
  constructor(
    @InjectRepository(Horario)private horarioRepository: Repository<Horario>,
  ) {}


  async create(createHorarioDto: CreateHorarioDto): Promise<Horario> {
    const { idOdontologo, fecha, hora } = createHorarioDto;

    const existe = await this.horarioRepository.findOneBy({
      idOdontologo,
      fecha,
      hora,
    });

    if (existe) {
      throw new ConflictException('Ya existe un horario para el odontólogo en la misma fecha y hora');
    }

    const horario = new Horario();
    horario.idOdontologo = idOdontologo;
    horario.fecha = fecha;
    horario.hora = hora;
    horario.estado = createHorarioDto.estado;
   

    return this.horarioRepository.save(horario);

  }
    

  async findAll(): Promise<Horario[]> {
    return this.horarioRepository.find({relations: ['odontologo'],});
  }

  async findOne(id: number) : Promise<Horario> {
    const horario = await this.horarioRepository.findOne({ 
      where: { id },
      relations: ['odontologo'],
     });
    if (!horario) {
      throw new NotFoundException(`Horario con id ${id} no encontrado`);
    }
    return horario;
  }

  async update(id: number, updateHorarioDto: UpdateHorarioDto): Promise<Horario> {
    const horario = await this.horarioRepository.findOneBy({ id });
    if (!horario) {
      throw new NotFoundException(`Horario con id ${id} no encontrado`);
    }
    const horarioUpdate = Object.assign(horario, updateHorarioDto);
    return this.horarioRepository.save(horarioUpdate);
  }

  async remove(id: number) { {
    const horario = await this.horarioRepository.findOneBy({ id });
    if (!horario) {
      throw new NotFoundException(`Horario con id ${id} no encontrado`);
    }
    return this.horarioRepository.softRemove(horario);

    }
  }
}
