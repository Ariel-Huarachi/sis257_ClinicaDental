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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pago = void 0;
const cita_entity_1 = require("../../citas/entities/cita.entity");
const typeorm_1 = require("typeorm");
let Pago = class Pago {
    id;
    idCita;
    montoPagado;
    metodoPago;
    fechaPago;
    fechaCreacion;
    fechaModificacion;
    fechaEliminacion;
    cita;
};
exports.Pago = Pago;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('identity'),
    __metadata("design:type", Number)
], Pago.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('integer', { name: 'cita_id' }),
    __metadata("design:type", Number)
], Pago.prototype, "idCita", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { name: 'monto_pagado', precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], Pago.prototype, "montoPagado", void 0);
__decorate([
    (0, typeorm_1.Column)('enum', { name: 'metodo_pago', enum: ['Efectivo', 'Tarjeta', 'QR'] }),
    __metadata("design:type", String)
], Pago.prototype, "metodoPago", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'fecha_pago' }),
    __metadata("design:type", Date)
], Pago.prototype, "fechaPago", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'fecha_creacion' }),
    __metadata("design:type", Date)
], Pago.prototype, "fechaCreacion", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'fecha_modificacion' }),
    __metadata("design:type", Date)
], Pago.prototype, "fechaModificacion", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ name: 'fecha_eliminacion' }),
    __metadata("design:type", Date)
], Pago.prototype, "fechaEliminacion", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => cita_entity_1.Cita, cita => cita.pagos),
    (0, typeorm_1.JoinColumn)({ name: 'cita_id', referencedColumnName: 'id' }),
    __metadata("design:type", cita_entity_1.Cita)
], Pago.prototype, "cita", void 0);
exports.Pago = Pago = __decorate([
    (0, typeorm_1.Entity)('Pagos')
], Pago);
//# sourceMappingURL=pago.entity.js.map