import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';

import { CreatePacienteDto } from './dto/create-paciente.dto';
import { UpdatePacienteDto } from './dto/update-paciente.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Paciente } from './entities/paciente.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PacientesService {
  constructor(@InjectRepository(Paciente) private pacienteRepository: Repository<Paciente>) {}
  
  async create(createPacienteDto: CreatePacienteDto): Promise<Paciente> {
    const BuscarPaciente = await this.pacienteRepository.findOne({
      where: [{ email: createPacienteDto.email }],
  });
    if (BuscarPaciente) {
      throw new ConflictException('El email ya está en uso');
    }
    const paciente = new Paciente();
    paciente.nombre = createPacienteDto.nombre.trim();
    paciente.primer_apellido = createPacienteDto.primer_apellido.trim();
    paciente.segundo_apellido = createPacienteDto.segundo_apellido.trim();
    paciente.email = createPacienteDto.email.trim();
    paciente.password = process.env.DEFAULT_PASSWORD ?? '';
    paciente.telefono = createPacienteDto.telefono.trim();
    paciente.direccion = createPacienteDto.direccion.trim();

    return this.pacienteRepository.save(paciente);
  }

  async findAll():Promise<Paciente[]> {
    return this.pacienteRepository.find({relations: ['rol']});
  }


  async findOne(id: number): Promise<Paciente> {
    const paciente = await this.pacienteRepository.findOneBy({id});
    if (!paciente) {
      throw new ConflictException(`Paciente no encontrado`);
    }
    return paciente;
  }

  async findAuthenticatedUser(id: number): Promise<Paciente> {
    // Reutilizamos findOne para obtener al cliente autenticado
    return this.findOne(id);
  }

  async update(id: number, updatePacienteDto: UpdatePacienteDto): Promise<Paciente> {
    const paciente = await this.findOne(id);  
    const pacienteUpdate = Object.assign(paciente, updatePacienteDto);
    return this.pacienteRepository.save(pacienteUpdate);
  }

  async remove(id: number) {
    const paciente = await this.findOne(id);
    return this.pacienteRepository.softRemove(paciente);
  }

  async validate(email: string, clave: string): Promise<Paciente | null> {
    const emailOkey = await this.pacienteRepository.findOne({
      where: { email },
      select: ['id', 'nombre', 'email', 'password'], // Campos seleccionados
      relations: ['rol'], // Incluye la relación con el rol
    });

    if (!emailOkey) {
      return null; // Retorna null si no encuentra el cliente
    }

    // Validamos la contraseña
    const isPasswordValid = emailOkey.validatePassword(clave);
    if (!isPasswordValid) {
        throw new UnauthorizedException('La contraseña actual es incorrecta.'); // Retorna null si la contraseña no es válida
    }

    return emailOkey; // Devuelve el cliente con el rol cargado
  }

  async cambiarPassword(
    userId: number,
    passwordActual: string,
    nuevaPassword: string,
  ): Promise<string> {
    // 1. Buscar al cliente por ID
    const paciente = await this.findOne(userId);
    if (!paciente) {
      throw new NotFoundException('Paciente no encontrado.');
    }

    // 2. Validar la contraseña actual
    const isPasswordValid = paciente.validatePassword(passwordActual);
    if (!isPasswordValid) {
      throw new UnauthorizedException('La contraseña actual es incorrecta.');
    }

    // 3. Actualizar la contraseña
    paciente.password = nuevaPassword; // Asignar la nueva contraseña
    await this.pacienteRepository.save(paciente); // Guardar cambios (se hashea automáticamente en `hashPassword`)

    return 'La contraseña ha sido actualizada correctamente.';
  }
}
