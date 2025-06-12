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
exports.PacientesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const paciente_entity_1 = require("./entities/paciente.entity");
const typeorm_2 = require("typeorm");
let PacientesService = class PacientesService {
    pacienteRepository;
    constructor(pacienteRepository) {
        this.pacienteRepository = pacienteRepository;
    }
    async create(createPacienteDto) {
        const BuscarPaciente = await this.pacienteRepository.findOne({
            where: [{ email: createPacienteDto.email }],
        });
        if (BuscarPaciente) {
            throw new common_1.ConflictException('El email ya está en uso');
        }
        const paciente = new paciente_entity_1.Paciente();
        paciente.nombre = createPacienteDto.nombre.trim();
        paciente.primer_apellido = createPacienteDto.primer_apellido.trim();
        paciente.segundo_apellido = createPacienteDto.segundo_apellido.trim();
        paciente.email = createPacienteDto.email.trim();
        paciente.password = process.env.DEFAULT_PASSWORD ?? '';
        paciente.telefono = createPacienteDto.telefono.trim();
        paciente.direccion = createPacienteDto.direccion.trim();
        return this.pacienteRepository.save(paciente);
    }
    async findAll() {
        return this.pacienteRepository.find({ relations: ['rol'] });
    }
    async findOne(id) {
        const paciente = await this.pacienteRepository.findOneBy({ id });
        if (!paciente) {
            throw new common_1.ConflictException(`Paciente no encontrado`);
        }
        return paciente;
    }
    async findAuthenticatedUser(id) {
        return this.findOne(id);
    }
    async update(id, updatePacienteDto) {
        const paciente = await this.findOne(id);
        const pacienteUpdate = Object.assign(paciente, updatePacienteDto);
        return this.pacienteRepository.save(pacienteUpdate);
    }
    async remove(id) {
        const paciente = await this.findOne(id);
        return this.pacienteRepository.softRemove(paciente);
    }
    async validate(email, clave) {
        const emailOkey = await this.pacienteRepository.findOne({
            where: { email },
            select: ['id', 'nombre', 'email', 'password'],
            relations: ['rol'],
        });
        if (!emailOkey) {
            return null;
        }
        const isPasswordValid = emailOkey.validatePassword(clave);
        if (!isPasswordValid) {
            throw new common_1.UnauthorizedException('La contraseña actual es incorrecta.');
        }
        return emailOkey;
    }
    async cambiarPassword(userId, passwordActual, nuevaPassword) {
        const paciente = await this.findOne(userId);
        if (!paciente) {
            throw new common_1.NotFoundException('Paciente no encontrado.');
        }
        const isPasswordValid = paciente.validatePassword(passwordActual);
        if (!isPasswordValid) {
            throw new common_1.UnauthorizedException('La contraseña actual es incorrecta.');
        }
        paciente.password = nuevaPassword;
        await this.pacienteRepository.save(paciente);
        return 'La contraseña ha sido actualizada correctamente.';
    }
};
exports.PacientesService = PacientesService;
exports.PacientesService = PacientesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(paciente_entity_1.Paciente)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PacientesService);
//# sourceMappingURL=pacientes.service.js.map