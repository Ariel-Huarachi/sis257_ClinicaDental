import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HistorialClinico } from './entities/historial-clinico.entity';
import { CreateHistorialClinicoDto } from './dto/create-historial-clinico.dto';
import { UpdateHistorialClinicoDto } from './dto/update-historial-clinico.dto';
import { Paciente } from 'src/pacientes/entities/paciente.entity';

@Injectable()
export class HistorialClinicoService {
  constructor(
    @InjectRepository(HistorialClinico)
    private historialClinicoRepository: Repository<HistorialClinico>,

    @InjectRepository(Paciente)
    private pacientesRepository: Repository<Paciente>,
  ) {}

  /**
   * Crear un nuevo historial clínico
   * @param createHistorialClinicoDto 
   * @returns HistorialClinico
   */
  async create(createHistorialClinicoDto: CreateHistorialClinicoDto): Promise<HistorialClinico> {
    const { idCliente } = createHistorialClinicoDto;

    // Verificar si el paciente existe
    const pacienteExistente = await this.pacientesRepository.findOneBy({
      id: idCliente,
    });

    if (!pacienteExistente) {
      throw new NotFoundException(`El paciente con ID ${idCliente} no existe`);
    }

    // Crear el historial clínico
    const nuevoHistorial = this.historialClinicoRepository.create(createHistorialClinicoDto);
    return this.historialClinicoRepository.save(nuevoHistorial);
  }

  /**
   * Obtener todos los historiales clínicos con su relación al paciente
   * @returns HistorialClinico[]
   */
  async findAll(): Promise<HistorialClinico[]> {
    return this.historialClinicoRepository.find({
      relations: ['paciente'],
      order: { fechaCreacion: 'DESC' },
    });
  }

  /**
   * Obtener un historial clínico específico por su ID
   * @param id 
   * @returns HistorialClinico
   */
  async findOne(id: number): Promise<HistorialClinico> {
    const historial = await this.historialClinicoRepository.findOne({
      where: { id },
      relations: ['paciente'],
    });

    if (!historial) {
      throw new NotFoundException(`El historial clínico con ID ${id} no existe`);
    }

    return historial;
  }

  /**
   * Actualizar un historial clínico
   * @param id 
   * @param updateHistorialClinicoDto 
   * @returns HistorialClinico
   */
  async update(id: number, updateHistorialClinicoDto: UpdateHistorialClinicoDto): Promise<HistorialClinico> {
    const historial = await this.findOne(id);

    if (!historial) {
      throw new NotFoundException(`El historial clínico con ID ${id} no existe`);
    }

    // Si se actualiza el paciente, validar su existencia
    if (updateHistorialClinicoDto.idCliente && updateHistorialClinicoDto.idCliente !== historial.idCliente) {
      const pacienteExistente = await this.pacientesRepository.findOneBy({
        id: updateHistorialClinicoDto.idCliente,
      });

      if (!pacienteExistente) {
        throw new NotFoundException(`El paciente con ID ${updateHistorialClinicoDto.idCliente} no existe`);
      }
    }

    const historialActualizado = Object.assign(historial, updateHistorialClinicoDto);
    return this.historialClinicoRepository.save(historialActualizado);
  }

  /**
   * Eliminar (soft delete) un historial clínico
   * @param id 
   * @returns HistorialClinico
   */
  async remove(id: number): Promise<HistorialClinico> {
    const historial = await this.findOne(id);
    return this.historialClinicoRepository.softRemove(historial);
  }
}
