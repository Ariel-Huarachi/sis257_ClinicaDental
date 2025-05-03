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
exports.CitasService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const cita_entity_1 = require("./entities/cita.entity");
const paciente_entity_1 = require("../pacientes/entities/paciente.entity");
const odontologo_entity_1 = require("../odontologos/entities/odontologo.entity");
let CitasService = class CitasService {
    citasRepository;
    pacienteRepository;
    odontologosRepository;
    constructor(citasRepository, pacienteRepository, odontologosRepository) {
        this.citasRepository = citasRepository;
        this.pacienteRepository = pacienteRepository;
        this.odontologosRepository = odontologosRepository;
    }
    async create(createCitaDto) {
        const { idPaciente, idOdontologo, fechaHoraInicio, fechaHoraFin } = createCitaDto;
        const pasienteExistente = await this.pacienteRepository.findOneBy({
            id: idPaciente,
        });
        if (!pasienteExistente) {
            throw new common_1.NotFoundException(`Paciente con ID ${idPaciente} no encontrado`);
        }
        const odontologoExistente = await this.odontologosRepository.findOneBy({
            id: idOdontologo,
        });
        if (!odontologoExistente) {
            throw new common_1.NotFoundException(`Odontologo con ID ${idOdontologo} no encontrado`);
        }
        this.validarHorarioPermitido(new Date(fechaHoraInicio), new Date(fechaHoraFin));
        const nuevaCita = this.citasRepository.create(createCitaDto);
        return this.citasRepository.save(nuevaCita);
    }
    async findAll() {
        return this.citasRepository.find({
            relations: ['paciente', 'odontologo'],
        });
    }
    async findOne(id) {
        const cita = await this.citasRepository.findOne({
            where: { id },
            relations: ['paciente', 'odontologo'],
        });
        if (!cita) {
            throw new common_1.NotFoundException(`Cita no encontrada`);
        }
        return cita;
    }
    async update(id, updateCitaDto) {
        const cita = await this.findOne(id);
        if (!cita) {
            throw new common_1.NotFoundException(`Cita no encontrada`);
        }
        const { idPaciente, idOdontologo, fechaHoraInicio, fechaHoraFin, estado } = updateCitaDto;
        if (updateCitaDto.idPaciente && updateCitaDto.idPaciente !== cita.idPaciente) {
            const pacienteExistente = await this.pacienteRepository.findOneBy({
                id: updateCitaDto.idPaciente,
            });
            if (!pacienteExistente) {
                throw new common_1.NotFoundException(`Paciente con ID ${idPaciente} no encontrado`);
            }
        }
        if (updateCitaDto.idOdontologo && updateCitaDto.idOdontologo !== cita.idOdontologo) {
            const odontologoExistente = await this.odontologosRepository.findOneBy({
                id: updateCitaDto.idOdontologo,
            });
            if (!odontologoExistente) {
                throw new common_1.NotFoundException(`Odontologo con ID ${idOdontologo} no encontrado`);
            }
        }
        if (fechaHoraInicio && fechaHoraFin) {
            this.validarHorarioPermitido(new Date(fechaHoraInicio), new Date(fechaHoraFin));
            cita.fechaHoraInicio = new Date(fechaHoraInicio);
            cita.fechaHoraFin = new Date(fechaHoraFin);
        }
        if (estado) {
            cita.estado = estado;
        }
        const citaActualizada = {
            ...updateCitaDto,
            id: id,
        };
        return this.citasRepository.save(citaActualizada);
    }
    async remove(id) {
        const cita = await this.findOne(id);
        return this.citasRepository.softRemove(cita);
    }
    validarHorarioPermitido(fecha_hora_inicio, fecha_hora_fin) {
        const inicio = new Date(fecha_hora_inicio);
        const fin = new Date(fecha_hora_fin);
        const horaInicio = new Date(inicio);
        horaInicio.setHours(8, 0, 0, 0);
        const horaFin = new Date(inicio);
        horaFin.setHours(12, 30, 0, 0);
        const horaInicioTarde = new Date(inicio);
        horaInicioTarde.setHours(14, 0, 0, 0);
        const horaFinTarde = new Date(inicio);
        horaFinTarde.setHours(18, 0, 0, 0);
        if (!((inicio >= horaInicio && inicio <= horaFin) ||
            (inicio >= horaInicioTarde && inicio <= horaFinTarde))) {
            throw new common_1.ConflictException('La cita debe estar dentro del horario permitido (08:00 AM - 12:30 PM y 02:00 PM - 06:00 PM)');
        }
    }
};
exports.CitasService = CitasService;
exports.CitasService = CitasService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(cita_entity_1.Cita)),
    __param(1, (0, typeorm_1.InjectRepository)(paciente_entity_1.Paciente)),
    __param(2, (0, typeorm_1.InjectRepository)(odontologo_entity_1.Odontologo)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], CitasService);
//# sourceMappingURL=citas.service.js.map