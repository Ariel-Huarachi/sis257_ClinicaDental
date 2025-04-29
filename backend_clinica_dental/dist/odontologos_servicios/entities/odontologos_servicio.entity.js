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
exports.OdontologosServicio = void 0;
const odontologo_entity_1 = require("../../odontologos/entities/odontologo.entity");
const servicio_entity_1 = require("../../servicios/entities/servicio.entity");
const typeorm_1 = require("typeorm");
let OdontologosServicio = class OdontologosServicio {
    id;
    idOdontologo;
    idServicio;
    fechaCreacion;
    fechaModificacion;
    fechaEliminacion;
    odontologo;
    servicio;
};
exports.OdontologosServicio = OdontologosServicio;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('identity'),
    __metadata("design:type", Number)
], OdontologosServicio.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('integer', { name: 'odontologo_id' }),
    __metadata("design:type", Number)
], OdontologosServicio.prototype, "idOdontologo", void 0);
__decorate([
    (0, typeorm_1.Column)('integer', { name: 'servicio_id' }),
    __metadata("design:type", Number)
], OdontologosServicio.prototype, "idServicio", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'fecha_creacion' }),
    __metadata("design:type", Date)
], OdontologosServicio.prototype, "fechaCreacion", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'fecha_modificacion' }),
    __metadata("design:type", Date)
], OdontologosServicio.prototype, "fechaModificacion", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ name: 'fecha_eliminacion' }),
    __metadata("design:type", Date)
], OdontologosServicio.prototype, "fechaEliminacion", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => odontologo_entity_1.Odontologo, odontologo => odontologo.odontologosServicios),
    (0, typeorm_1.JoinColumn)({ name: 'odontologo_id', referencedColumnName: 'id' }),
    __metadata("design:type", odontologo_entity_1.Odontologo)
], OdontologosServicio.prototype, "odontologo", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => servicio_entity_1.Servicio, servicio => servicio.odontologosServicios),
    (0, typeorm_1.JoinColumn)({ name: 'servicio_id', referencedColumnName: 'id' }),
    __metadata("design:type", servicio_entity_1.Servicio)
], OdontologosServicio.prototype, "servicio", void 0);
exports.OdontologosServicio = OdontologosServicio = __decorate([
    (0, typeorm_1.Entity)('odontologos_servicios')
], OdontologosServicio);
//# sourceMappingURL=odontologos_servicio.entity.js.map