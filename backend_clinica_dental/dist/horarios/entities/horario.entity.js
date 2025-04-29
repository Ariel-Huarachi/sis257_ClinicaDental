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
exports.Horario = void 0;
const odontologo_entity_1 = require("../../odontologos/entities/odontologo.entity");
const typeorm_1 = require("typeorm");
let Horario = class Horario {
    id;
    idOdontologo;
    fecha;
    hora;
    estado;
    fechaCreacion;
    fechaModificacion;
    fechaEliminacion;
    odontologo;
};
exports.Horario = Horario;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('identity'),
    __metadata("design:type", Number)
], Horario.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('integer', { name: 'odontologo_id' }),
    __metadata("design:type", Number)
], Horario.prototype, "idOdontologo", void 0);
__decorate([
    (0, typeorm_1.Column)('date', { name: 'fecha' }),
    __metadata("design:type", Date)
], Horario.prototype, "fecha", void 0);
__decorate([
    (0, typeorm_1.Column)('time', { name: 'hora' }),
    __metadata("design:type", String)
], Horario.prototype, "hora", void 0);
__decorate([
    (0, typeorm_1.Column)('enum', {
        name: 'estado',
        enum: ['Disponible', 'Reservado', 'Ocupado', 'No disponible'],
    }),
    __metadata("design:type", String)
], Horario.prototype, "estado", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'fecha_creacion' }),
    __metadata("design:type", Date)
], Horario.prototype, "fechaCreacion", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'fecha_modificacion' }),
    __metadata("design:type", Date)
], Horario.prototype, "fechaModificacion", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ name: 'fecha_eliminacion' }),
    __metadata("design:type", Date)
], Horario.prototype, "fechaEliminacion", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => odontologo_entity_1.Odontologo, odontologo => odontologo.horarios),
    (0, typeorm_1.JoinColumn)({ name: 'odontologo_id', referencedColumnName: 'id' }),
    __metadata("design:type", odontologo_entity_1.Odontologo)
], Horario.prototype, "odontologo", void 0);
exports.Horario = Horario = __decorate([
    (0, typeorm_1.Entity)('horarios')
], Horario);
//# sourceMappingURL=horario.entity.js.map