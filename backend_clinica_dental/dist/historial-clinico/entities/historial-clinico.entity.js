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
exports.HistorialClinico = void 0;
const paciente_entity_1 = require("../../pacientes/entities/paciente.entity");
const typeorm_1 = require("typeorm");
let HistorialClinico = class HistorialClinico {
    id;
    idCliente;
    diagnostico;
    tratamientoRealizado;
    observaciones;
    fechaTratamiento;
    fechaCreacion;
    fechaModificacion;
    fechaEliminacion;
    paciente;
};
exports.HistorialClinico = HistorialClinico;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('identity'),
    __metadata("design:type", Number)
], HistorialClinico.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('integer', { name: 'cliente_id' }),
    __metadata("design:type", Number)
], HistorialClinico.prototype, "idCliente", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'diagnostico' }),
    __metadata("design:type", String)
], HistorialClinico.prototype, "diagnostico", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'tratamiento_realizado' }),
    __metadata("design:type", String)
], HistorialClinico.prototype, "tratamientoRealizado", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'observaciones' }),
    __metadata("design:type", String)
], HistorialClinico.prototype, "observaciones", void 0);
__decorate([
    (0, typeorm_1.Column)('date', { name: 'fecha_tratamiento' }),
    __metadata("design:type", Date)
], HistorialClinico.prototype, "fechaTratamiento", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'fecha_creacion' }),
    __metadata("design:type", Date)
], HistorialClinico.prototype, "fechaCreacion", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'fecha_modificacion' }),
    __metadata("design:type", Date)
], HistorialClinico.prototype, "fechaModificacion", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ name: 'fecha_eliminacion' }),
    __metadata("design:type", Date)
], HistorialClinico.prototype, "fechaEliminacion", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => paciente_entity_1.Paciente, paciente => paciente.historialClinico),
    (0, typeorm_1.JoinColumn)({ name: 'cliente_id', referencedColumnName: 'id' }),
    __metadata("design:type", paciente_entity_1.Paciente)
], HistorialClinico.prototype, "paciente", void 0);
exports.HistorialClinico = HistorialClinico = __decorate([
    (0, typeorm_1.Entity)('historial_clinico')
], HistorialClinico);
//# sourceMappingURL=historial-clinico.entity.js.map