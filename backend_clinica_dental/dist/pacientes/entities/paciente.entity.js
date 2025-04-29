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
exports.Paciente = void 0;
const cita_entity_1 = require("../../citas/entities/cita.entity");
const historial_clinico_entity_1 = require("../../historial-clinico/entities/historial-clinico.entity");
const rol_entity_1 = require("../../roles/entities/rol.entity");
const typeorm_1 = require("typeorm");
let Paciente = class Paciente {
    id;
    nombre;
    primer_apellido;
    segundo_apellido;
    email;
    password;
    telefono;
    direccion;
    idRol;
    fechaCreacion;
    fechaModificacion;
    fechaEliminacion;
    rol;
    citas;
    historialClinico;
};
exports.Paciente = Paciente;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('identity'),
    __metadata("design:type", Number)
], Paciente.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 50, }),
    __metadata("design:type", String)
], Paciente.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 50, }),
    __metadata("design:type", String)
], Paciente.prototype, "primer_apellido", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 50, }),
    __metadata("design:type", String)
], Paciente.prototype, "segundo_apellido", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 100, }),
    __metadata("design:type", String)
], Paciente.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 255, }),
    __metadata("design:type", String)
], Paciente.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 20, }),
    __metadata("design:type", String)
], Paciente.prototype, "telefono", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 255, }),
    __metadata("design:type", String)
], Paciente.prototype, "direccion", void 0);
__decorate([
    (0, typeorm_1.Column)('integer', { name: 'rol_id' }),
    __metadata("design:type", Number)
], Paciente.prototype, "idRol", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'fecha_creacion' }),
    __metadata("design:type", Date)
], Paciente.prototype, "fechaCreacion", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'fecha_modificacion' }),
    __metadata("design:type", Date)
], Paciente.prototype, "fechaModificacion", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ name: 'fecha_eliminacion' }),
    __metadata("design:type", Date)
], Paciente.prototype, "fechaEliminacion", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => rol_entity_1.Rol, rol => rol.pacientes),
    (0, typeorm_1.JoinColumn)({ name: 'rol_id', referencedColumnName: 'id' }),
    __metadata("design:type", rol_entity_1.Rol)
], Paciente.prototype, "rol", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => cita_entity_1.Cita, cita => cita.paciente),
    __metadata("design:type", Array)
], Paciente.prototype, "citas", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => historial_clinico_entity_1.HistorialClinico, historialClinico => historialClinico.paciente),
    __metadata("design:type", Array)
], Paciente.prototype, "historialClinico", void 0);
exports.Paciente = Paciente = __decorate([
    (0, typeorm_1.Entity)('pacientes')
], Paciente);
//# sourceMappingURL=paciente.entity.js.map