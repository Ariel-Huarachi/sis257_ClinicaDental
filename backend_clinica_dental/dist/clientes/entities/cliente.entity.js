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
exports.Cliente = void 0;
const cita_entity_1 = require("../../citas/entities/cita.entity");
const role_entity_1 = require("../../roles/entities/role.entity");
const typeorm_1 = require("typeorm");
const bcrypt = require("bcrypt");
let Cliente = class Cliente {
    async hashPassword() {
        if (this.password) {
            const salt = await bcrypt.genSalt();
            this.password = await bcrypt.hash(this.password, salt);
        }
    }
    async validatePassword(plainPassword) {
        return bcrypt.compare(plainPassword, this.password);
    }
};
exports.Cliente = Cliente;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('identity'),
    __metadata("design:type", Number)
], Cliente.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 150 }),
    __metadata("design:type", String)
], Cliente.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 150, name: 'primer_apellido' }),
    __metadata("design:type", String)
], Cliente.prototype, "primerApellido", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 150, name: 'segundo_apellido' }),
    __metadata("design:type", String)
], Cliente.prototype, "segundoApellido", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 150 }),
    __metadata("design:type", String)
], Cliente.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 250 }),
    __metadata("design:type", String)
], Cliente.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 15 }),
    __metadata("design:type", String)
], Cliente.prototype, "telefono", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 150 }),
    __metadata("design:type", String)
], Cliente.prototype, "direccion", void 0);
__decorate([
    (0, typeorm_1.Column)('integer', { name: 'rol_id', default: 2 }),
    __metadata("design:type", Number)
], Cliente.prototype, "rol_id", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'fecha_creacion' }),
    __metadata("design:type", Date)
], Cliente.prototype, "fechaCreacion", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'fecha_modificacion' }),
    __metadata("design:type", Date)
], Cliente.prototype, "fechaModificacion", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ name: 'fecha_eliminacion', select: false }),
    __metadata("design:type", Date)
], Cliente.prototype, "fechaEliminacion", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    (0, typeorm_1.BeforeUpdate)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Cliente.prototype, "hashPassword", null);
__decorate([
    (0, typeorm_1.ManyToOne)(() => role_entity_1.Rol, (rol) => rol.clientes),
    (0, typeorm_1.JoinColumn)({ name: 'rol_id', referencedColumnName: 'id' }),
    __metadata("design:type", role_entity_1.Rol)
], Cliente.prototype, "rol", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => cita_entity_1.Cita, (cita) => cita.cliente),
    __metadata("design:type", Array)
], Cliente.prototype, "citas", void 0);
exports.Cliente = Cliente = __decorate([
    (0, typeorm_1.Entity)('clientes')
], Cliente);
//# sourceMappingURL=cliente.entity.js.map