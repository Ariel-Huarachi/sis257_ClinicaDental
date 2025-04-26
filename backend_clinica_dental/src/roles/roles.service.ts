import { ConflictException, Injectable } from '@nestjs/common';
import { CreateRolDto } from './dto/create-rol.dto';
import { UpdateRolDto } from './dto/update-rol.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Rol } from './entities/rol.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Rol) private rolesRepository: Repository<Rol>,
  ) {} // inyectamos el repositorio de roles para poder usarlo en los métodos del servicio
  // el constructor es el lugar donde inyectamos las dependencias

  async create(createRolDto: CreateRolDto): Promise<Rol> {
    const existe = await this.rolesRepository.findOneBy({
      name: createRolDto.name ? createRolDto.name.trim() : '',
      //return 'This action adds a new role';
    }); // findOneBy es un método de TypeORM que busca un registro en la base de datos

    if (existe) {
      throw new ConflictException('El rol ya existe');
    } // si existe el rol, lanzamos una excepción de conflicto

    const rol = new Rol(); // creamos una nueva instancia de la entidad Rol
    rol.name = createRolDto.name.trim(); // asignamos el nombre del rol a la propiedad name de la entidad Rol
    return this.rolesRepository.save(rol); // guardamos el rol en la base de datos y lo retornamos
  }

  async findAll() {
    return this.rolesRepository.find(); // find es un método de TypeORM que busca todos los registros en la base de datos
    //return `This action returns all roles`;
  }

  async findOne(id: number): Promise<Rol> {
    const rol = await this.rolesRepository.findOneBy({ id }); // findOneBy es un método de TypeORM que busca un registro en la base de datos
    if (!rol) throw new ConflictException('El rol no existe'); // si no existe el rol, lanzamos una excepción de conflicto
    return rol; // retornamos el rol encontrado
    //return `This action returns a #${id} role`;
  }

  async update(id: number, updateRolDto: UpdateRolDto) {
    const rol = await this.findOne(id); // no usa this.rolesRepository.findOneBy({ id }) porque ya tenemos el método findOne que lanza la excepción si no existe el rol
    const rolUpdate = Object.assign(rol, updateRolDto); // asignamos los valores del DTO al rol encontrado
    return this.rolesRepository.save(rolUpdate); // guardamos el rol actualizado en la base de datos y lo retornamos
    //return `This action updates a #${id} role`;
  }

  async remove(id: number) {
    const rol = await this.rolesRepository.findOneBy({ id }); // findOneBy es un método de TypeORM que busca un registro en la base de datos
    if (rol) return this.rolesRepository.softRemove({ id }); // si existe el rol, lo eliminamos de forma soft remove ase que no se borre de la base de datos
    //return `This action removes a #${id} role`;
  }
}
