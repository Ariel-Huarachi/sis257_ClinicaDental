import { CreateRoleDto } from './dto/create-rol.dto';
import { UpdateRoleDto } from './dto/update-rol.dto';
import { Rol } from './entities/rol.entity';
import { Repository } from 'typeorm';
export declare class RolesService {
    private rolesRepository;
    constructor(rolesRepository: Repository<Rol>);
    create(createRoleDto: CreateRoleDto): Promise<Rol>;
    findAll(): Promise<Rol[]>;
    findOne(id: number): Promise<Rol>;
    update(id: number, updateRoleDto: UpdateRoleDto): Promise<Rol>;
    remove(id: number): Promise<Rol>;
}
