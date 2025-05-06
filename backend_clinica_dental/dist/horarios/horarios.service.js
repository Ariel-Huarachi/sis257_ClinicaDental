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
exports.HorariosService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const horario_entity_1 = require("./entities/horario.entity");
let HorariosService = class HorariosService {
    horarioRepository;
    constructor(horarioRepository) {
        this.horarioRepository = horarioRepository;
    }
    async create(createHorarioDto) {
        const { idOdontologo, fecha, hora } = createHorarioDto;
        const existe = await this.horarioRepository.findOneBy({
            idOdontologo,
            fecha,
            hora,
        });
        if (existe) {
            throw new common_1.ConflictException('Ya existe un horario para el odontólogo en la misma fecha y hora');
        }
        const horario = new horario_entity_1.Horario();
        horario.idOdontologo = idOdontologo;
        horario.fecha = fecha;
        horario.hora = hora;
        horario.estado = createHorarioDto.estado;
        return this.horarioRepository.save(horario);
    }
    async findAll() {
        return this.horarioRepository.find({ relations: ['odontologo'], });
    }
    async findOne(id) {
        const horario = await this.horarioRepository.findOne({
            where: { id },
            relations: ['odontologo'],
        });
        if (!horario) {
            throw new common_1.NotFoundException(`Horario con id ${id} no encontrado`);
        }
        return horario;
    }
    async update(id, updateHorarioDto) {
        const horario = await this.horarioRepository.findOneBy({ id });
        if (!horario) {
            throw new common_1.NotFoundException(`Horario con id ${id} no encontrado`);
        }
        const horarioUpdate = Object.assign(horario, updateHorarioDto);
        return this.horarioRepository.save(horarioUpdate);
    }
    async remove(id) {
        {
            const horario = await this.horarioRepository.findOneBy({ id });
            if (!horario) {
                throw new common_1.NotFoundException(`Horario con id ${id} no encontrado`);
            }
            return this.horarioRepository.softRemove(horario);
        }
    }
};
exports.HorariosService = HorariosService;
exports.HorariosService = HorariosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(horario_entity_1.Horario)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], HorariosService);
//# sourceMappingURL=horarios.service.js.map