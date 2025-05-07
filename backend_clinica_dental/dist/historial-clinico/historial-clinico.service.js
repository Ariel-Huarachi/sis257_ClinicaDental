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
exports.HistorialClinicoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const historial_clinico_entity_1 = require("./entities/historial-clinico.entity");
const paciente_entity_1 = require("../pacientes/entities/paciente.entity");
let HistorialClinicoService = class HistorialClinicoService {
    historialClinicoRepository;
    pacientesRepository;
    constructor(historialClinicoRepository, pacientesRepository) {
        this.historialClinicoRepository = historialClinicoRepository;
        this.pacientesRepository = pacientesRepository;
    }
    async create(createHistorialClinicoDto) {
        const { idCliente } = createHistorialClinicoDto;
        const pacienteExistente = await this.pacientesRepository.findOneBy({
            id: idCliente,
        });
        if (!pacienteExistente) {
            throw new common_1.NotFoundException(`El paciente con ID ${idCliente} no existe`);
        }
        const nuevoHistorial = this.historialClinicoRepository.create(createHistorialClinicoDto);
        return this.historialClinicoRepository.save(nuevoHistorial);
    }
    async findAll() {
        return this.historialClinicoRepository.find({
            relations: ['paciente'],
            order: { fechaCreacion: 'DESC' },
        });
    }
    async findOne(id) {
        const historial = await this.historialClinicoRepository.findOne({
            where: { id },
            relations: ['paciente'],
        });
        if (!historial) {
            throw new common_1.NotFoundException(`El historial clínico con ID ${id} no existe`);
        }
        return historial;
    }
    async update(id, updateHistorialClinicoDto) {
        const historial = await this.findOne(id);
        if (!historial) {
            throw new common_1.NotFoundException(`El historial clínico con ID ${id} no existe`);
        }
        if (updateHistorialClinicoDto.idCliente && updateHistorialClinicoDto.idCliente !== historial.idCliente) {
            const pacienteExistente = await this.pacientesRepository.findOneBy({
                id: updateHistorialClinicoDto.idCliente,
            });
            if (!pacienteExistente) {
                throw new common_1.NotFoundException(`El paciente con ID ${updateHistorialClinicoDto.idCliente} no existe`);
            }
        }
        const historialActualizado = Object.assign(historial, updateHistorialClinicoDto);
        return this.historialClinicoRepository.save(historialActualizado);
    }
    async remove(id) {
        const historial = await this.findOne(id);
        return this.historialClinicoRepository.softRemove(historial);
    }
};
exports.HistorialClinicoService = HistorialClinicoService;
exports.HistorialClinicoService = HistorialClinicoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(historial_clinico_entity_1.HistorialClinico)),
    __param(1, (0, typeorm_1.InjectRepository)(paciente_entity_1.Paciente)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], HistorialClinicoService);
//# sourceMappingURL=historial-clinico.service.js.map