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
exports.OdontologosServiciosService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const odontologo_servicio_entity_1 = require("./entities/odontologo_servicio.entity");
const typeorm_2 = require("typeorm");
const odontologo_entity_1 = require("../odontologos/entities/odontologo.entity");
const servicio_entity_1 = require("../servicios/entities/servicio.entity");
let OdontologosServiciosService = class OdontologosServiciosService {
    constructor(odontologoServicioRepository, odontologoRepository, servicioRepository) {
        this.odontologoServicioRepository = odontologoServicioRepository;
        this.odontologoRepository = odontologoRepository;
        this.servicioRepository = servicioRepository;
    }
    async create(createOdontologoServicioDto) {
        const { odontologoId, servicioId } = createOdontologoServicioDto;
        const odontologoExistente = await this.odontologoRepository.findOneBy({
            id: odontologoId,
        });
        if (!odontologoExistente) {
            throw new common_1.NotFoundException(`El odontólogo con ID ${odontologoId} no existe`);
        }
        const servicioExistente = await this.servicioRepository.findOneBy({
            id: servicioId,
        });
        if (!servicioExistente) {
            throw new common_1.NotFoundException(`El servicio con ID ${servicioId} no existe`);
        }
        const existe = await this.odontologoServicioRepository.findOne({
            where: { odontologoId: odontologoId, servicioId: servicioId },
        });
        if (existe)
            throw new common_1.ConflictException(`El odontólogo ya está asociado con el servicio de nombre ${servicioExistente.nombre} se agrego los no repetidos. Gracias`);
        const odontologoServicio = new odontologo_servicio_entity_1.OdontologoServicio();
        odontologoServicio.odontologoId = createOdontologoServicioDto.odontologoId;
        odontologoServicio.servicioId = createOdontologoServicioDto.servicioId;
        return this.odontologoServicioRepository.save(odontologoServicio);
    }
    async findAll() {
        return this.odontologoServicioRepository.find({
            relations: ['odontologo', 'servicio'],
        });
    }
    async findOne(id) {
        if (isNaN(id)) {
            throw new common_1.BadRequestException('El id proporcionado no es válido');
        }
        try {
            const odontologoServicio = await this.odontologoServicioRepository.findOneOrFail({
                where: { id },
                relations: ['odontologo', 'servicio'],
            });
            return odontologoServicio;
        }
        catch (error) {
            throw new common_1.ConflictException('El odontólogo no está asociado con este servicio');
        }
    }
    async update(id, updateOdontologoServicioDto) {
        const odontologoServicio = await this.odontologoServicioRepository.findOneBy({ id });
        if (!odontologoServicio) {
            throw new common_1.NotFoundException('La relación no existe para este odontólogo y servicio');
        }
        odontologoServicio.servicioId = updateOdontologoServicioDto.servicioId;
        return this.odontologoServicioRepository.save(odontologoServicio);
    }
    async remove(id) {
        const odontologoServicio = await this.odontologoServicioRepository.findOneBy({ id });
        if (!odontologoServicio)
            throw new common_1.ConflictException('El odontólogo no está asociado con este servicio');
        return this.odontologoServicioRepository.softRemove(odontologoServicio);
    }
    async eliminarRelacion(odontologoId, servicioId) {
        console.log('Intentando eliminar relación:', { odontologoId, servicioId });
        try {
            const relacion = await this.odontologoServicioRepository.findOne({
                where: { odontologoId, servicioId },
            });
            if (!relacion) {
                console.error('Relación no encontrada en la base de datos');
                return false;
            }
            await this.odontologoServicioRepository.remove(relacion);
            return true;
        }
        catch (error) {
            return false;
        }
    }
    async findByOdontologoId(odontologoId) {
        const odontologoServicios = await this.odontologoServicioRepository.find({
            where: { odontologoId },
            relations: ['servicio'],
        });
        return odontologoServicios.map((item) => ({
            id: item.servicio.id,
            nombre: item.servicio.nombre,
            descripcion: item.servicio.descripcion,
            precio: item.servicio.precio,
            duracion: item.servicio.duracion,
        }));
    }
    async findServiciosDisponibles(odontologoId) {
        const serviciosAsignados = await this.odontologoServicioRepository.find({
            where: { odontologoId },
            relations: ['servicio'],
        });
        const serviciosAsignadosIds = serviciosAsignados.map(item => item.servicio.id);
        const serviciosDisponibles = await this.servicioRepository.find({
            where: {
                id: (0, typeorm_2.Not)((0, typeorm_2.In)(serviciosAsignadosIds)),
            },
        });
        return serviciosDisponibles;
    }
};
exports.OdontologosServiciosService = OdontologosServiciosService;
exports.OdontologosServiciosService = OdontologosServiciosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(odontologo_servicio_entity_1.OdontologoServicio)),
    __param(1, (0, typeorm_1.InjectRepository)(odontologo_entity_1.Odontologo)),
    __param(2, (0, typeorm_1.InjectRepository)(servicio_entity_1.Servicio)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], OdontologosServiciosService);
//# sourceMappingURL=odontologos_servicios.service.js.map