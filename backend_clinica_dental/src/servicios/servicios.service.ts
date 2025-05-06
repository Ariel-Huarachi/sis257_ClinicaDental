import { ConflictException, Injectable } from '@nestjs/common';
import { CreateServicioDto } from './dto/create-servicio.dto';
import { UpdateServicioDto } from './dto/update-servicio.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Servicio } from './entities/servicio.entity';

@Injectable()
export class ServiciosService {
  constructor(
    @InjectRepository(Servicio)
    private serviciosRepository: Repository<Servicio>,
  ) {}

  async create(createServicioDto: CreateServicioDto): Promise<Servicio> {
    // Verificar si el nombre ya existe
    const existe = await this.serviciosRepository.findOne({
      where: { nombre: createServicioDto.nombre },
    });

    if (existe) {
      throw new ConflictException('El servicio con ese nombre ya existe');
    }

    // Crear nuevo servicio
    const servicio = new Servicio();
    servicio.nombre = createServicioDto.nombre.trim();
    servicio.descripcion = createServicioDto.descripcion.trim();
    servicio.precio = createServicioDto.precio;
    servicio.duracion = createServicioDto.duracion;

    return this.serviciosRepository.save(servicio);
  }

  async findAll(): Promise<Servicio[]> {
    return this.serviciosRepository.find();
  }

  async findOne(id: number): Promise<Servicio> {
    const servicio = await this.serviciosRepository.findOneBy({ id });

    if (!servicio) {
      throw new ConflictException('El servicio no existe');
    }

    return servicio;
  }

  async update(id: number, updateServicioDto: UpdateServicioDto): Promise<Servicio> {
    const servicio = await this.findOne(id);

    // Actualizar los campos
    const servicioActualizado = Object.assign(servicio, updateServicioDto);

    return this.serviciosRepository.save(servicioActualizado);
  }

  async remove(id: number): Promise<Servicio> {
    const servicio = await this.findOne(id);

    return this.serviciosRepository.softRemove(servicio);
  }
}
