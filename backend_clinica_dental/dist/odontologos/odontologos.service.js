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
exports.OdontologosService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const odontologo_entity_1 = require("./entities/odontologo.entity");
let OdontologosService = class OdontologosService {
    odontologosRepository;
    constructor(odontologosRepository) {
        this.odontologosRepository = odontologosRepository;
    }
    async create(createOdontologoDto) {
        const buscarOdontologo = await this.odontologosRepository.findOne({
            where: { email: createOdontologoDto.email },
        });
        if (buscarOdontologo) {
            throw new common_1.ConflictException('El odontologo ya existe');
        }
        const nuevoOdontologo = new odontologo_entity_1.Odontologo();
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
    async findAll() {
        return this.odontologosRepository.find({ relations: ['rol'] });
    }
    async findOne(id) {
        const odontologo = await this.odontologosRepository.findOneBy({ id });
        if (!odontologo) {
            throw new common_1.ConflictException(`El odontologo no existe`);
        }
        return odontologo;
    }
    async findAuthenticatedUser(id) {
        return this.findOne(id);
    }
    async update(id, updateOdontologoDto) {
        const odontologo = await this.findOne(id);
        const odontologoUpdate = Object.assign(odontologo, updateOdontologoDto);
        return this.odontologosRepository.save(odontologoUpdate);
    }
    async remove(id) {
        const odontologo = await this.findOne(id);
        return this.odontologosRepository.softRemove(odontologo);
    }
    async validate(email, clave) {
        const emailOkey = await this.odontologosRepository.findOne({
            where: { email },
            select: ['id', 'nombre', 'email', 'password'],
            relations: ['rol'],
        });
        if (!emailOkey) {
            return null;
        }
        const isPasswordValid = await emailOkey.validatePassword(clave);
        if (!isPasswordValid) {
            return null;
        }
        return emailOkey;
    }
    async cambiarPassword(userId, passwordActual, nuevaPassword) {
        const odontologo = await this.findOne(userId);
        if (!odontologo) {
            throw new common_1.NotFoundException('Odontologo no encontrado.');
        }
        const isPasswordValid = await odontologo.validatePassword(passwordActual);
        if (!isPasswordValid) {
            throw new common_1.UnauthorizedException('La contraseña actual es incorrecta.');
        }
        odontologo.password = nuevaPassword;
        await this.odontologosRepository.save(odontologo);
        return 'La contraseña ha sido actualizada correctamente.';
    }
};
exports.OdontologosService = OdontologosService;
exports.OdontologosService = OdontologosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(odontologo_entity_1.Odontologo)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], OdontologosService);
//# sourceMappingURL=odontologos.service.js.map