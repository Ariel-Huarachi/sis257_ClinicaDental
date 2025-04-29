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
exports.CitasServicio = void 0;
const cita_entity_1 = require("../../citas/entities/cita.entity");
const servicio_entity_1 = require("../../servicios/entities/servicio.entity");
const typeorm_1 = require("typeorm");
let CitasServicio = class CitasServicio {
    id;
    idCita;
    idServicio;
    precioServicio;
    fechaCreacion;
    fechaModificacion;
    fechaEliminacion;
    cita;
    servicio;
};
exports.CitasServicio = CitasServicio;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('identity'),
    __metadata("design:type", Number)
], CitasServicio.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('integer', { name: 'cita_id' }),
    __metadata("design:type", Number)
], CitasServicio.prototype, "idCita", void 0);
__decorate([
    (0, typeorm_1.Column)('integer', { name: 'servicio_id' }),
    __metadata("design:type", Number)
], CitasServicio.prototype, "idServicio", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { name: 'precio_servicio', precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], CitasServicio.prototype, "precioServicio", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'fecha_creacion' }),
    __metadata("design:type", Date)
], CitasServicio.prototype, "fechaCreacion", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'fecha_modificacion' }),
    __metadata("design:type", Date)
], CitasServicio.prototype, "fechaModificacion", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ name: 'fecha_eliminacion' }),
    __metadata("design:type", Date)
], CitasServicio.prototype, "fechaEliminacion", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => cita_entity_1.Cita, cita => cita.citas_servicios),
    (0, typeorm_1.JoinColumn)({ name: 'cita_id', referencedColumnName: 'id' }),
    __metadata("design:type", cita_entity_1.Cita)
], CitasServicio.prototype, "cita", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => servicio_entity_1.Servicio, servicio => servicio.citas_servicios),
    (0, typeorm_1.JoinColumn)({ name: 'servicio_id', referencedColumnName: 'id' }),
    __metadata("design:type", servicio_entity_1.Servicio)
], CitasServicio.prototype, "servicio", void 0);
exports.CitasServicio = CitasServicio = __decorate([
    (0, typeorm_1.Entity)('citas_servicios')
], CitasServicio);
//# sourceMappingURL=citas_servicio.entity.js.map