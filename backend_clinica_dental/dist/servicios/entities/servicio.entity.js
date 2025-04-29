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
exports.Servicio = void 0;
const citas_servicio_entity_1 = require("../../citas_servicios/entities/citas_servicio.entity");
const odontologos_servicio_entity_1 = require("../../odontologos_servicios/entities/odontologos_servicio.entity");
const typeorm_1 = require("typeorm");
let Servicio = class Servicio {
    id;
    nombre;
    descripcion;
    precio;
    duracion;
    fechaCreacion;
    fechaModificacion;
    fechaEliminacion;
    odontologosServicios;
    citas_servicios;
};
exports.Servicio = Servicio;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('identity'),
    __metadata("design:type", Number)
], Servicio.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 100, }),
    __metadata("design:type", String)
], Servicio.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { nullable: true, }),
    __metadata("design:type", String)
], Servicio.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { name: 'precio', precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], Servicio.prototype, "precio", void 0);
__decorate([
    (0, typeorm_1.Column)('integer', { name: 'duracion' }),
    __metadata("design:type", Number)
], Servicio.prototype, "duracion", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'fecha_creacion' }),
    __metadata("design:type", Date)
], Servicio.prototype, "fechaCreacion", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'fecha_modificacion' }),
    __metadata("design:type", Date)
], Servicio.prototype, "fechaModificacion", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ name: 'fecha_eliminacion' }),
    __metadata("design:type", Date)
], Servicio.prototype, "fechaEliminacion", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => odontologos_servicio_entity_1.OdontologosServicio, odontologosServicio => odontologosServicio.servicio),
    __metadata("design:type", Array)
], Servicio.prototype, "odontologosServicios", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => citas_servicio_entity_1.CitasServicio, citasServicio => citasServicio.servicio),
    __metadata("design:type", Array)
], Servicio.prototype, "citas_servicios", void 0);
exports.Servicio = Servicio = __decorate([
    (0, typeorm_1.Entity)('servicios')
], Servicio);
//# sourceMappingURL=servicio.entity.js.map