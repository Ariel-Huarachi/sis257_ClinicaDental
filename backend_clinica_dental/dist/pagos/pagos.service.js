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
exports.PagosService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const pago_entity_1 = require("./entities/pago.entity");
const cita_entity_1 = require("../citas/entities/cita.entity");
let PagosService = class PagosService {
    pagoRepository;
    citaRepository;
    constructor(pagoRepository, citaRepository) {
        this.pagoRepository = pagoRepository;
        this.citaRepository = citaRepository;
    }
    async create(createPagoDto) {
        const { idCita, montoPagado, metodoPago, fechaPago } = createPagoDto;
        const cita = await this.citaRepository.findOneBy({ id: idCita });
        if (!cita) {
            throw new common_1.NotFoundException(`Cita con ID ${idCita} no encontrada`);
        }
        const metodosPermitidos = ['Efectivo', 'Tarjeta', 'QR'];
        if (!metodosPermitidos.includes(metodoPago)) {
            throw new common_1.BadRequestException(`Método de pago no válido. Métodos permitidos: ${metodosPermitidos.join(', ')}`);
        }
        const nuevoPago = this.pagoRepository.create({
            idCita,
            montoPagado,
            metodoPago,
            fechaPago: new Date(fechaPago),
        });
        return this.pagoRepository.save(nuevoPago);
    }
    async findAll() {
        return this.pagoRepository.find({
            relations: ['cita'],
        });
    }
    async findOne(id) {
        const pago = await this.pagoRepository.findOne({
            where: { id },
            relations: ['cita'],
        });
        if (!pago) {
            throw new common_1.NotFoundException(`Pago con ID ${id} no encontrado`);
        }
        return pago;
    }
    async update(id, updatePagoDto) {
        const pagoExistente = await this.findOne(id);
        const { idCita, montoPagado, metodoPago, fechaPago } = updatePagoDto;
        if (idCita && idCita !== pagoExistente.idCita) {
            const cita = await this.citaRepository.findOneBy({ id: idCita });
            if (!cita) {
                throw new common_1.NotFoundException(`Cita con ID ${idCita} no encontrada`);
            }
        }
        if (metodoPago) {
            const metodosPermitidos = ['Efectivo', 'Tarjeta', 'QR'];
            if (!metodosPermitidos.includes(metodoPago)) {
                throw new common_1.BadRequestException(`Método de pago no válido. Métodos permitidos: ${metodosPermitidos.join(', ')}`);
            }
        }
        const pagoActualizado = this.pagoRepository.merge(pagoExistente, {
            idCita,
            montoPagado,
            metodoPago,
            fechaPago: fechaPago ? new Date(fechaPago) : undefined,
        });
        return this.pagoRepository.save(pagoActualizado);
    }
    async remove(id) {
        const pago = await this.findOne(id);
        return this.pagoRepository.softRemove(pago);
    }
};
exports.PagosService = PagosService;
exports.PagosService = PagosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(pago_entity_1.Pago)),
    __param(1, (0, typeorm_1.InjectRepository)(cita_entity_1.Cita)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], PagosService);
//# sourceMappingURL=pagos.service.js.map