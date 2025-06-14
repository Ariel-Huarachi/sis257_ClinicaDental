"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolesService = void 0;
const common_1 = require("@nestjs/common");
const rol_entity_1 = require("./entities/rol.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let RolesService = class RolesService {
    rolesRepository;
    constructor(rolesRepository) {
        this.rolesRepository = rolesRepository;
    }
    async create(createRoleDto) {
        const { nombre_rol } = createRoleDto;
        if (!nombre_rol ||
            (nombre_rol !== 'paciente' && nombre_rol !== 'odontologo')) {
            throw new common_1.ConflictException('El campo rol es obligatorio y debe ser "odontologo" o "paciente"');
        }
        const rol = new rol_entity_1.Rol();
        rol.nombre_rol = createRoleDto.nombre_rol.trim();
        return this.rolesRepository.save(rol);
    }
    async findAll() {
        return this.rolesRepository.find();
    }
    async findOne(id) {
        const rol = await this.rolesRepository.findOneBy({ id });
        if (!rol) {
            throw new common_1.NotFoundException(`Rol no existe`);
        }
        return rol;
    }
    async update(id, updateRoleDto) {
        const rol = await this.findOne(id);
        const rolUpdate = Object.assign(rol, updateRoleDto);
        return this.rolesRepository.save(rolUpdate);
    }
    async remove(id) {
        const rol = await this.findOne(id);
        return this.rolesRepository.softRemove(rol);
    }
};
exports.RolesService = RolesService;
exports.RolesService = RolesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(rol_entity_1.Rol)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], RolesService);
//# sourceMappingURL=roles.service.js.map