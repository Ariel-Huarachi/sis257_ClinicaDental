import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OdontologosServicio } from './entities/odontologos_servicio.entity';
import { CreateOdontologosServicioDto } from './dto/create-odontologos_servicio.dto';
import { UpdateOdontologosServicioDto } from './dto/update-odontologos_servicio.dto';

@Injectable()
export class OdontologosServiciosService {
  constructor(
    @InjectRepository(OdontologosServicio)
    private readonly odontologosServicioRepository: Repository<OdontologosServicio>,
  ) {}

  // Crear nuevo odontologo_servicio
  async create(createOdontologosServicioDto: CreateOdontologosServicioDto): Promise<OdontologosServicio> {
    const existe = await this.odontologosServicioRepository.findOne({
      where: {
        idOdontologo: createOdontologosServicioDto.idOdontologo,
        idServicio: createOdontologosServicioDto.idServicio,
      },
    });

    if (existe) {
      throw new ConflictException('Este odontólogo ya tiene asignado este servicio.');
    }

    const nuevo = this.odontologosServicioRepository.create(createOdontologosServicioDto);
    return await this.odontologosServicioRepository.save(nuevo);
  }

  // Listar todos los odontologos_servicios
  async findAll(): Promise<OdontologosServicio[]> {
    return await this.odontologosServicioRepository.find({
      relations: ['odontologo', 'servicio'],
    });
  }

  // Buscar un odontologo_servicio por ID
  async findOne(id: number): Promise<OdontologosServicio> {
    const odontologoServicio = await this.odontologosServicioRepository.findOne({
      where: { id },
      relations: ['odontologo', 'servicio'],
    });

    if (!odontologoServicio) {
      throw new NotFoundException(`El registro con id ${id} no existe`);
    }

    return odontologoServicio;
  }

  // Actualizar un odontologo_servicio
  async update(id: number, updateOdontologosServicioDto: UpdateOdontologosServicioDto): Promise<OdontologosServicio> {
    const odontologoServicio = await this.findOne(id);

    Object.assign(odontologoServicio, updateOdontologosServicioDto);

    return await this.odontologosServicioRepository.save(odontologoServicio);
  }

  // Eliminar definitivamente un odontologo_servicio
  async remove(id: number): Promise<void> {
    const odontologoServicio = await this.findOne(id);

    await this.odontologosServicioRepository.remove(odontologoServicio);
  }
}
