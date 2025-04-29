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
exports.Odontologo = void 0;
const cita_entity_1 = require("../../citas/entities/cita.entity");
const horario_entity_1 = require("../../horarios/entities/horario.entity");
const odontologos_servicio_entity_1 = require("../../odontologos_servicios/entities/odontologos_servicio.entity");
const rol_entity_1 = require("../../roles/entities/rol.entity");
const typeorm_1 = require("typeorm");
let Odontologo = class Odontologo {
    id;
    nombre;
    primer_apellido;
    segundo_apellido;
    email;
    telefono;
    direccion;
    especialidad;
    idRol;
    fechaCreacion;
    fechaModificacion;
    fechaEliminacion;
    rol;
    horarios;
    citas;
    odontologosServicios;
};
exports.Odontologo = Odontologo;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('identity'),
    __metadata("design:type", Number)
], Odontologo.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 50, }),
    __metadata("design:type", String)
], Odontologo.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 50, }),
    __metadata("design:type", String)
], Odontologo.prototype, "primer_apellido", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 50, }),
    __metadata("design:type", String)
], Odontologo.prototype, "segundo_apellido", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 100, }),
    __metadata("design:type", String)
], Odontologo.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 20, }),
    __metadata("design:type", String)
], Odontologo.prototype, "telefono", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 255, }),
    __metadata("design:type", String)
], Odontologo.prototype, "direccion", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 100, }),
    __metadata("design:type", String)
], Odontologo.prototype, "especialidad", void 0);
__decorate([
    (0, typeorm_1.Column)('integer', { name: 'rol_id' }),
    __metadata("design:type", Number)
], Odontologo.prototype, "idRol", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'fecha_creacion' }),
    __metadata("design:type", Date)
], Odontologo.prototype, "fechaCreacion", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'fecha_modificacion' }),
    __metadata("design:type", Date)
], Odontologo.prototype, "fechaModificacion", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ name: 'fecha_eliminacion' }),
    __metadata("design:type", Date)
], Odontologo.prototype, "fechaEliminacion", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => rol_entity_1.Rol, rol => rol.odontologos),
    (0, typeorm_1.JoinColumn)({ name: 'rol_id', referencedColumnName: 'id' }),
    __metadata("design:type", rol_entity_1.Rol)
], Odontologo.prototype, "rol", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => horario_entity_1.Horario, horario => horario.odontologo),
    __metadata("design:type", Array)
], Odontologo.prototype, "horarios", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => cita_entity_1.Cita, cita => cita.odontologo),
    __metadata("design:type", Array)
], Odontologo.prototype, "citas", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => odontologos_servicio_entity_1.OdontologosServicio, odontologosServicio => odontologosServicio.odontologo),
    __metadata("design:type", Array)
], Odontologo.prototype, "odontologosServicios", void 0);
exports.Odontologo = Odontologo = __decorate([
    (0, typeorm_1.Entity)('odontologos')
], Odontologo);
//# sourceMappingURL=odontologo.entity.js.map