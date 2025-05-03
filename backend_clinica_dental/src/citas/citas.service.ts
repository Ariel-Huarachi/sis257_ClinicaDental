import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { CreateCitaDto } from './dto/create-cita.dto';
import { UpdateCitaDto } from './dto/update-cita.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cita } from './entities/cita.entity';
import { Paciente } from 'src/pacientes/entities/paciente.entity';
import { Odontologo } from 'src/odontologos/entities/odontologo.entity';

@Injectable()
export class CitasService {
  constructor(
    @InjectRepository(Cita)
    private citasRepository: Repository<Cita>,
    @InjectRepository(Paciente)private pacienteRepository: Repository<Paciente>,
    @InjectRepository(Odontologo)private odontologosRepository: Repository<Odontologo>,
  ) {}

  async create(createCitaDto: CreateCitaDto): Promise<Cita> {
    const { idPaciente, idOdontologo, fechaHoraInicio, fechaHoraFin} = createCitaDto;

    // Verificar si el paciente existe
    const pasienteExistente = await this.pacienteRepository.findOneBy({ 
      id: idPaciente,
    });
    if (!pasienteExistente) {
      throw new NotFoundException(`Paciente con ID ${idPaciente} no encontrado`);

    }

    // Verificar si el odontologo existe
    const odontologoExistente = await this.odontologosRepository.findOneBy({ 
      id: idOdontologo,
    });
    if (!odontologoExistente) {
      throw new NotFoundException(`Odontologo con ID ${idOdontologo} no encontrado`);
    }

      // Validar horario permitido
      this.validarHorarioPermitido(
        new Date(fechaHoraInicio),
        new Date(fechaHoraFin),
      );

      const nuevaCita = this.citasRepository.create(createCitaDto);
      return this.citasRepository.save(nuevaCita);
  }
  
    
  async findAll(): Promise<Cita[]> {
    return this.citasRepository.find({
      relations: ['paciente', 'odontologo'],
    });
  }


  async findOne(id: number): Promise<Cita> {
    const cita = await this.citasRepository.findOne({
      where: { id },
      relations: ['paciente', 'odontologo'],
    });
    if (!cita) {
      throw new NotFoundException(`Cita no encontrada`);
    }
    return cita;
  }

  async update(id: number, updateCitaDto: UpdateCitaDto): Promise<Cita> {
    const cita = await this.findOne(id);

    if (!cita) {
      throw new NotFoundException(`Cita no encontrada`);
    }
    const { idPaciente, idOdontologo, fechaHoraInicio, fechaHoraFin, estado} = updateCitaDto;

    /// Validar si el cliente se está actualizando
    if (updateCitaDto.idPaciente && updateCitaDto.idPaciente !== cita.idPaciente) {
      const pacienteExistente = await this.pacienteRepository.findOneBy({ 
        id: updateCitaDto.idPaciente,
      });
      if (!pacienteExistente) {
        throw new NotFoundException(`Paciente con ID ${idPaciente} no encontrado`);
      }
      
    }

    if (updateCitaDto.idOdontologo && updateCitaDto.idOdontologo !== cita.idOdontologo) {
      const odontologoExistente = await this.odontologosRepository.findOneBy({ 
        id: updateCitaDto.idOdontologo,
      });
      if (!odontologoExistente) {
        throw new NotFoundException(`Odontologo con ID ${idOdontologo} no encontrado`);
      }
    }

     // Validar horario permitido y fechas
     if(fechaHoraInicio && fechaHoraFin) {
      this.validarHorarioPermitido(
        new Date(fechaHoraInicio),
        new Date(fechaHoraFin),
      );

      cita.fechaHoraInicio = new Date(fechaHoraInicio);
      cita.fechaHoraFin = new Date(fechaHoraFin);
    }

      if(estado){
        cita.estado = estado;
      }

      const citaActualizada = {
        ...updateCitaDto,
        id: id,
      };

  
  return this.citasRepository.save(citaActualizada);
}



async remove(id: number): Promise<Cita> {
    const cita = await this.findOne(id);
    return this.citasRepository.softRemove(cita);
  }

  
  private validarHorarioPermitido(fecha_hora_inicio: Date, fecha_hora_fin: Date) {
    const inicio = new Date(fecha_hora_inicio);
    const fin = new Date(fecha_hora_fin);

    const horaInicio = new Date(inicio);
    horaInicio.setHours(8, 0, 0, 0); // 08:00 AM

    const horaFin = new Date(inicio);
    horaFin.setHours(12, 30,0,0); // 12:30 PM

    const horaInicioTarde = new Date(inicio);
    horaInicioTarde.setHours(14, 0, 0, 0); // 02:00 PM

    const horaFinTarde = new Date(inicio);
    horaFinTarde.setHours(18, 0, 0, 0); // 06:00 PM


    if(
      !(
        (inicio >= horaInicio && inicio <= horaFin) ||
        (inicio >= horaInicioTarde && inicio <= horaFinTarde)
      )
    ){
      throw new ConflictException(
        'La cita debe estar dentro del horario permitido (08:00 AM - 12:30 PM y 02:00 PM - 06:00 PM)',
      );
    }
  }
}
