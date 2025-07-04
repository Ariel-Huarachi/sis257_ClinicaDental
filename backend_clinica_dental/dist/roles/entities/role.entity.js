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
exports.Rol = void 0;
const cliente_entity_1 = require("../../clientes/entities/cliente.entity");
const odontologo_entity_1 = require("../../odontologos/entities/odontologo.entity");
const typeorm_1 = require("typeorm");
let Rol = class Rol {
};
exports.Rol = Rol;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('identity'),
    __metadata("design:type", Number)
], Rol.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 15 }),
    __metadata("design:type", String)
], Rol.prototype, "nombre_rol", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'fecha_creacion' }),
    __metadata("design:type", Date)
], Rol.prototype, "fechaCreacion", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'fecha_modificacion' }),
    __metadata("design:type", Date)
], Rol.prototype, "fechaModificacion", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ name: 'fecha_eliminacion', select: false }),
    __metadata("design:type", Date)
], Rol.prototype, "fechaEliminacion", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => cliente_entity_1.Cliente, (cliente) => cliente.rol),
    __metadata("design:type", Array)
], Rol.prototype, "clientes", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => odontologo_entity_1.Odontologo, (odontologo) => odontologo.rol),
    __metadata("design:type", Array)
], Rol.prototype, "odontologos", void 0);
exports.Rol = Rol = __decorate([
    (0, typeorm_1.Entity)('roles')
], Rol);
//# sourceMappingURL=role.entity.js.map