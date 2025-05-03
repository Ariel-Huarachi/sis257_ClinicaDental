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
exports.Cita = void 0;
const citas_servicio_entity_1 = require("../../citas_servicios/entities/citas_servicio.entity");
const odontologo_entity_1 = require("../../odontologos/entities/odontologo.entity");
const paciente_entity_1 = require("../../pacientes/entities/paciente.entity");
const pago_entity_1 = require("../../pagos/entities/pago.entity");
const typeorm_1 = require("typeorm");
let Cita = class Cita {
    id;
    estado;
    idPaciente;
    idOdontologo;
    fechaHoraInicio;
    fechaHoraFin;
    fechaCreacion;
    fechaModificacion;
    fechaEliminacion;
    paciente;
    odontologo;
    pagos;
    citas_servicios;
};
exports.Cita = Cita;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('identity'),
    __metadata("design:type", Number)
], Cita.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('enum', { enum: ['Programada', 'Completada', 'Cancelada'] }),
    __metadata("design:type", String)
], Cita.prototype, "estado", void 0);
__decorate([
    (0, typeorm_1.Column)('integer', { name: 'paciente_id' }),
    __metadata("design:type", Number)
], Cita.prototype, "idPaciente", void 0);
__decorate([
    (0, typeorm_1.Column)('integer', { name: 'odontologo_id' }),
    __metadata("design:type", Number)
], Cita.prototype, "idOdontologo", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'fecha_hora_inicio' }),
    __metadata("design:type", Date)
], Cita.prototype, "fechaHoraInicio", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'fecha_hora_fin' }),
    __metadata("design:type", Date)
], Cita.prototype, "fechaHoraFin", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'fecha_creacion' }),
    __metadata("design:type", Date)
], Cita.prototype, "fechaCreacion", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'fecha_modificacion' }),
    __metadata("design:type", Date)
], Cita.prototype, "fechaModificacion", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ name: 'fecha_eliminacion' }),
    __metadata("design:type", Date)
], Cita.prototype, "fechaEliminacion", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => paciente_entity_1.Paciente, paciente => paciente.citas),
    (0, typeorm_1.JoinColumn)({ name: 'paciente_id', referencedColumnName: 'id' }),
    __metadata("design:type", paciente_entity_1.Paciente)
], Cita.prototype, "paciente", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => odontologo_entity_1.Odontologo, odontologo => odontologo.citas),
    (0, typeorm_1.JoinColumn)({ name: 'odontologo_id', referencedColumnName: 'id' }),
    __metadata("design:type", odontologo_entity_1.Odontologo)
], Cita.prototype, "odontologo", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => pago_entity_1.Pago, pago => pago.cita),
    __metadata("design:type", Array)
], Cita.prototype, "pagos", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => citas_servicio_entity_1.CitasServicio, citasServicio => citasServicio.cita),
    __metadata("design:type", Array)
], Cita.prototype, "citas_servicios", void 0);
exports.Cita = Cita = __decorate([
    (0, typeorm_1.Entity)('citas')
], Cita);
//# sourceMappingURL=cita.entity.js.map