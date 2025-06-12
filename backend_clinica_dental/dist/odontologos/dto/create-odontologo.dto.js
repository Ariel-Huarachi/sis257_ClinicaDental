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
exports.CreateOdontologoDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateOdontologoDto {
    nombre;
    primerApellido;
    segundoApellido;
    email;
    password;
    telefono;
    direccion;
    especialidad;
}
exports.CreateOdontologoDto = CreateOdontologoDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'El campo nombre es obligatorio' }),
    (0, class_validator_1.IsString)({ message: 'El campo nombre debe ser un string o cadena' }),
    (0, class_validator_1.MaxLength)(50, { message: 'El campo nombre debe tener un máximo de 50 caracteres', }),
    __metadata("design:type", String)
], CreateOdontologoDto.prototype, "nombre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'El campo primer_apellido es obligatorio' }),
    (0, class_validator_1.IsString)({ message: 'El campo primer_apellido debe ser un string o cadena' }),
    (0, class_validator_1.MaxLength)(50, { message: 'El campo primer_apellido debe tener un máximo de 50 caracteres', }),
    __metadata("design:type", String)
], CreateOdontologoDto.prototype, "primerApellido", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'El campo segundo_apellido es obligatorio' }),
    (0, class_validator_1.IsString)({ message: 'El campo segundo_apellido debe ser un string o cadena' }),
    (0, class_validator_1.MaxLength)(50, { message: 'El campo segundo_apellido debe tener un máximo de 50 caracteres', }),
    __metadata("design:type", String)
], CreateOdontologoDto.prototype, "segundoApellido", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'El campo email es obligatorio' }),
    (0, class_validator_1.IsEmail)({}, { message: 'El campo email debe ser un email válido' }),
    (0, class_validator_1.MaxLength)(100, { message: 'El campo email debe tener un máximo de 100 caracteres', }),
    (0, class_validator_1.IsEmail)({}, { message: 'El campo debe ser un email' }),
    __metadata("design:type", String)
], CreateOdontologoDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'El campo password es obligatorio' }),
    (0, class_validator_1.IsString)({ message: 'El campo password debe ser un string o cadena' }),
    (0, class_validator_1.MaxLength)(250, { message: 'El campo password debe tener un máximo de 250 caracteres', }),
    __metadata("design:type", String)
], CreateOdontologoDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'El campo telefono es obligatorio' }),
    (0, class_validator_1.IsString)({ message: 'El campo telefono debe ser un string o cadena' }),
    (0, class_validator_1.MaxLength)(20, { message: 'El campo telefono debe tener un máximo de 20 caracteres', }),
    __metadata("design:type", String)
], CreateOdontologoDto.prototype, "telefono", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'El campo direccion es obligatorio' }),
    (0, class_validator_1.IsString)({ message: 'El campo direccion debe ser un string o cadena' }),
    (0, class_validator_1.MaxLength)(255, { message: 'El campo direccion debe tener un máximo de 255 caracteres', }),
    __metadata("design:type", String)
], CreateOdontologoDto.prototype, "direccion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'El campo especialidad es obligatorio' }),
    (0, class_validator_1.IsString)({ message: 'El campo especialidad debe ser un string o cadena' }),
    (0, class_validator_1.MaxLength)(100, { message: 'El campo especialidad debe tener un máximo de 100 caracteres', }),
    __metadata("design:type", String)
], CreateOdontologoDto.prototype, "especialidad", void 0);
//# sourceMappingURL=create-odontologo.dto.js.map