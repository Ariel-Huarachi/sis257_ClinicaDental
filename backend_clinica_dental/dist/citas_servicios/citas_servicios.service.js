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
exports.CitasServiciosService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const citas_servicio_entity_1 = require("./entities/citas_servicio.entity");
const cita_entity_1 = require("../citas/entities/cita.entity");
const servicio_entity_1 = require("../servicios/entities/servicio.entity");
let CitasServiciosService = class CitasServiciosService {
    citasServiciosRepository;
    citasRepository;
    serviciosRepository;
    constructor(citasServiciosRepository, citasRepository, serviciosRepository) {
        this.citasServiciosRepository = citasServiciosRepository;
        this.citasRepository = citasRepository;
        this.serviciosRepository = serviciosRepository;
    }
    async create(createDto) {
        const { idCita, idServicio, precioServicio } = createDto;
        const cita = await this.citasRepository.findOneBy({ id: idCita });
        if (!cita) {
            throw new common_1.NotFoundException(`Cita con ID ${idCita} no encontrada`);
        }
        const servicio = await this.serviciosRepository.findOneBy({ id: idServicio });
        if (!servicio) {
            throw new common_1.NotFoundException(`Servicio con ID ${idServicio} no encontrado`);
        }
        const existente = await this.citasServiciosRepository.findOneBy({
            idCita,
            idServicio,
        });
        if (existente) {
            throw new common_1.ConflictException(`El servicio ya está registrado para esta cita`);
        }
        const nuevaRelacion = this.citasServiciosRepository.create(createDto);
        return this.citasServiciosRepository.save(nuevaRelacion);
    }
    async findAll() {
        return this.citasServiciosRepository.find({
            relations: ['cita', 'servicio'],
        });
    }
    async findOne(id) {
        const relacion = await this.citasServiciosRepository.findOne({
            where: { id },
            relations: ['cita', 'servicio'],
        });
        if (!relacion) {
            throw new common_1.NotFoundException(`Relación Cita-Servicio con ID ${id} no encontrada`);
        }
        return relacion;
    }
    async update(id, updateDto) {
        const relacion = await this.findOne(id);
        if (updateDto.idCita && updateDto.idCita !== relacion.idCita) {
            const nuevaCita = await this.citasRepository.findOneBy({ id: updateDto.idCita });
            if (!nuevaCita) {
                throw new common_1.NotFoundException(`Cita con ID ${updateDto.idCita} no encontrada`);
            }
        }
        if (updateDto.idServicio && updateDto.idServicio !== relacion.idServicio) {
            const nuevoServicio = await this.serviciosRepository.findOneBy({ id: updateDto.idServicio });
            if (!nuevoServicio) {
                throw new common_1.NotFoundException(`Servicio con ID ${updateDto.idServicio} no encontrado`);
            }
        }
        const actualizado = {
            ...relacion,
            ...updateDto,
        };
        return this.citasServiciosRepository.save(actualizado);
    }
    async remove(id) {
        const relacion = await this.findOne(id);
        return this.citasServiciosRepository.softRemove(relacion);
    }
};
exports.CitasServiciosService = CitasServiciosService;
exports.CitasServiciosService = CitasServiciosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(citas_servicio_entity_1.CitasServicio)),
    __param(1, (0, typeorm_1.InjectRepository)(cita_entity_1.Cita)),
    __param(2, (0, typeorm_1.InjectRepository)(servicio_entity_1.Servicio)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], CitasServiciosService);
//# sourceMappingURL=citas_servicios.service.js.map