import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-rol.dto';
import { UpdateRoleDto } from './dto/update-rol.dto';
export declare class RolesController {
    private readonly rolesService;
    constructor(rolesService: RolesService);
    create(createRoleDto: CreateRoleDto): Promise<import("./entities/rol.entity").Rol>;
    findAll(): Promise<import("./entities/rol.entity").Rol[]>;
    findOne(id: string): Promise<import("./entities/rol.entity").Rol>;
    update(id: string, updateRoleDto: UpdateRoleDto): Promise<import("./entities/rol.entity").Rol>;
    remove(id: string): Promise<import("./entities/rol.entity").Rol>;
}
