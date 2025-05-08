import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCitasServicioDto } from './dto/create-citas_servicio.dto';
import { UpdateCitasServicioDto } from './dto/update-citas_servicio.dto';
import { CitasServicio } from './entities/citas_servicio.entity';
import { Cita } from 'src/citas/entities/cita.entity';
import { Servicio } from 'src/servicios/entities/servicio.entity';

@Injectable()
export class CitasServiciosService {
  constructor(
    @InjectRepository(CitasServicio)
    private citasServiciosRepository: Repository<CitasServicio>,
    @InjectRepository(Cita)
    private citasRepository: Repository<Cita>,
    @InjectRepository(Servicio)
    private serviciosRepository: Repository<Servicio>,
  ) {}

  async create(createDto: CreateCitasServicioDto): Promise<CitasServicio> {
    const { idCita, idServicio, precioServicio } = createDto;

    // Validar si la cita existe
    const cita = await this.citasRepository.findOneBy({ id: idCita });
    if (!cita) {
      throw new NotFoundException(`Cita con ID ${idCita} no encontrada`);
    }

    // Validar si el servicio existe
    const servicio = await this.serviciosRepository.findOneBy({ id: idServicio });
    if (!servicio) {
      throw new NotFoundException(`Servicio con ID ${idServicio} no encontrado`);
    }

    // Validar si ya existe esa combinación de cita y servicio
    const existente = await this.citasServiciosRepository.findOneBy({
      idCita,
      idServicio,
    });
    if (existente) {
      throw new ConflictException(`El servicio ya está registrado para esta cita`);
    }

    const nuevaRelacion = this.citasServiciosRepository.create(createDto);
    return this.citasServiciosRepository.save(nuevaRelacion);
  }

  async findAll(): Promise<CitasServicio[]> {
    return this.citasServiciosRepository.find({
      relations: ['cita', 'servicio'],
    });
  }

  async findOne(id: number): Promise<CitasServicio> {
    const relacion = await this.citasServiciosRepository.findOne({
      where: { id },
      relations: ['cita', 'servicio'],
    });
    if (!relacion) {
      throw new NotFoundException(`Relación Cita-Servicio con ID ${id} no encontrada`);
    }
    return relacion;
  }

  async update(id: number, updateDto: UpdateCitasServicioDto): Promise<CitasServicio> {
    const relacion = await this.findOne(id);

    if (updateDto.idCita && updateDto.idCita !== relacion.idCita) {
      const nuevaCita = await this.citasRepository.findOneBy({ id: updateDto.idCita });
      if (!nuevaCita) {
        throw new NotFoundException(`Cita con ID ${updateDto.idCita} no encontrada`);
      }
    }

    if (updateDto.idServicio && updateDto.idServicio !== relacion.idServicio) {
      const nuevoServicio = await this.serviciosRepository.findOneBy({ id: updateDto.idServicio });
      if (!nuevoServicio) {
        throw new NotFoundException(`Servicio con ID ${updateDto.idServicio} no encontrado`);
      }
    }

    const actualizado = {
      ...relacion,
      ...updateDto,
    };

    return this.citasServiciosRepository.save(actualizado);
  }

  async remove(id: number): Promise<CitasServicio> {
    const relacion = await this.findOne(id);
    return this.citasServiciosRepository.softRemove(relacion);
  }
}
