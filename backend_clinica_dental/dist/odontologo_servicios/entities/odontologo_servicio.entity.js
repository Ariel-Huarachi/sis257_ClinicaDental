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
exports.OdontologoServicio = void 0;
const servicio_entity_1 = require("../../servicios/entities/servicio.entity");
const odontologo_entity_1 = require("../../odontologos/entities/odontologo.entity");
const typeorm_1 = require("typeorm");
let OdontologoServicio = class OdontologoServicio {
};
exports.OdontologoServicio = OdontologoServicio;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('identity'),
    __metadata("design:type", Number)
], OdontologoServicio.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('integer', { name: 'odontologo_id' }),
    __metadata("design:type", Number)
], OdontologoServicio.prototype, "odontologoId", void 0);
__decorate([
    (0, typeorm_1.Column)('integer', { name: 'servicio_id' }),
    __metadata("design:type", Number)
], OdontologoServicio.prototype, "servicioId", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'fecha_creacion' }),
    __metadata("design:type", Date)
], OdontologoServicio.prototype, "fechaCreacion", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'fecha_modificacion' }),
    __metadata("design:type", Date)
], OdontologoServicio.prototype, "fechaModificacion", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ name: 'fecha_eliminacion', select: false }),
    __metadata("design:type", Date)
], OdontologoServicio.prototype, "fechaEliminacion", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => odontologo_entity_1.Odontologo, (odontologo) => odontologo.odontologo_servicios),
    (0, typeorm_1.JoinColumn)({ name: 'odontologo_id', referencedColumnName: 'id' }),
    __metadata("design:type", odontologo_entity_1.Odontologo)
], OdontologoServicio.prototype, "odontologo", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => servicio_entity_1.Servicio, (servicio) => servicio.odontologo_servicios),
    (0, typeorm_1.JoinColumn)({ name: 'servicio_id', referencedColumnName: 'id' }),
    __metadata("design:type", servicio_entity_1.Servicio)
], OdontologoServicio.prototype, "servicio", void 0);
exports.OdontologoServicio = OdontologoServicio = __decorate([
    (0, typeorm_1.Entity)('odontologo_servicios')
], OdontologoServicio);
//# sourceMappingURL=odontologo_servicio.entity.js.map