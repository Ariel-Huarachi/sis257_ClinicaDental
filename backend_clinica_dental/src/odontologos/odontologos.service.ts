import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateOdontologoDto } from './dto/create-odontologo.dto';
import { UpdateOdontologoDto } from './dto/update-odontologo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Odontologo } from './entities/odontologo.entity';

@Injectable()
export class OdontologosService {
  constructor(
    @InjectRepository(Odontologo)
    private odontologosRepository: Repository<Odontologo>,
  ) {}

  async create(createOdontologoDto: CreateOdontologoDto):Promise<Odontologo> {
    const buscarOdontologo = await this.odontologosRepository.findOne({
      where: { email: createOdontologoDto.email },    
  });

    if (buscarOdontologo) {
      throw new ConflictException('El odontologo ya existe');
    }
    const nuevoOdontologo = new Odontologo();
    nuevoOdontologo.nombre = createOdontologoDto.nombre.trim();
    nuevoOdontologo.primer_apellido = createOdontologoDto.primer_apellido.trim();
    nuevoOdontologo.segundo_apellido = createOdontologoDto.segundo_apellido.trim();
    nuevoOdontologo.email = createOdontologoDto.email.trim();
    nuevoOdontologo.password = createOdontologoDto.password.trim();
    nuevoOdontologo.telefono = createOdontologoDto.telefono.trim();
    nuevoOdontologo.direccion = createOdontologoDto.direccion.trim();
    nuevoOdontologo.especialidad = createOdontologoDto.especialidad.trim();
    return this.odontologosRepository.save(nuevoOdontologo);
  }

  async findAll(): Promise<Odontologo[]> {
    return this.odontologosRepository.find({relations: ['rol']});
  }



  async findOne(id: number): Promise<Odontologo> {
    const odontologo = await this.odontologosRepository.findOneBy({id});
    if (!odontologo) {
      throw new ConflictException(`El odontologo no existe`);
    }
    return odontologo;
  }

  async findAuthenticatedUser(id: number): Promise<Odontologo> {
    // Reutilizamos findOne para obtener al odontologo autenticado
    return this.findOne(id);
  }

  async update(id: number, updateOdontologoDto: UpdateOdontologoDto): Promise<Odontologo> {
    const odontologo = await this.findOne(id);
    const odontologoUpdate = Object.assign(odontologo, updateOdontologoDto);
    return this.odontologosRepository.save(odontologoUpdate);
  }

  async remove(id: number): Promise<Odontologo> {
    const odontologo = await this.findOne(id);
    return this.odontologosRepository.softRemove(odontologo);
  }

  // aqui se valida el email y la clave
  async validate(email: string, clave: string): Promise<Odontologo | null> {
    const emailOkey = await this.odontologosRepository.findOne({
      where: { email },
      select: ['id', 'nombre', 'email', 'password'], // Campos seleccionados
      relations: ['rol'], // Incluye la relación con el rol
    });
  
    if (!emailOkey) {
      return null; // Retorna null si no encuentra el odontólogo
    }
  
    // Validamos la contraseña
    const isPasswordValid = await emailOkey.validatePassword(clave);
    if (!isPasswordValid) {
      return null; // Retorna null si la contraseña no es válida
    }
  
    return emailOkey; // Devuelve el odontólogo con el rol cargado
  }

  async cambiarPassword(
    userId: number,
    passwordActual: string,
    nuevaPassword: string,
  ): Promise<string> {
    // 1. Buscar al odontologo por ID
    const odontologo = await this.findOne(userId);
    if (!odontologo) {
      throw new NotFoundException('Odontologo no encontrado.');
    }

    // 2. Validar la contraseña actual
    const isPasswordValid = await odontologo.validatePassword(passwordActual);
    if (!isPasswordValid) {
      throw new UnauthorizedException('La contraseña actual es incorrecta.');
    }

    // 3. Actualizar la contraseña
    odontologo.password = nuevaPassword; // Asignar la nueva contraseña
    await this.odontologosRepository.save(odontologo); // Guardar cambios (se hashea automáticamente en `hashPassword`)

    return 'La contraseña ha sido actualizada correctamente.';
  } 
}
