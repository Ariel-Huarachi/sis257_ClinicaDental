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
exports.CreatePacienteDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreatePacienteDto {
    nombre;
    primerApellido;
    segundoApellido;
    email;
    password;
    telefono;
    direccion;
}
exports.CreatePacienteDto = CreatePacienteDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'El nombre es obligatorio' }),
    (0, class_validator_1.IsString)({ message: 'El nombre debe ser una cadena de texto' }),
    (0, class_validator_1.MaxLength)(50, { message: 'El nombre no puede exceder los 50 caracteres' }),
    __metadata("design:type", String)
], CreatePacienteDto.prototype, "nombre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'El primer apellido es obligatorio' }),
    (0, class_validator_1.IsString)({ message: 'El primer apellido debe ser una cadena de texto' }),
    (0, class_validator_1.MaxLength)(50, { message: 'El primer apellido no puede exceder los 50 caracteres' }),
    __metadata("design:type", String)
], CreatePacienteDto.prototype, "primerApellido", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'El segundo apellido es obligatorio' }),
    (0, class_validator_1.IsString)({ message: 'El segundo apellido debe ser una cadena de texto' }),
    (0, class_validator_1.MaxLength)(50, { message: 'El segundo apellido no puede exceder los 50 caracteres' }),
    __metadata("design:type", String)
], CreatePacienteDto.prototype, "segundoApellido", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'El email es obligatorio' }),
    (0, class_validator_1.IsString)({ message: 'El email debe ser una cadena de texto' }),
    (0, class_validator_1.MaxLength)(100, { message: 'El email no puede exceder los 100 caracteres' }),
    (0, class_validator_1.IsEmail)({}, { message: 'El campo debe ser un email' }),
    __metadata("design:type", String)
], CreatePacienteDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'La password es obligatoria' }),
    (0, class_validator_1.IsString)({ message: 'La password debe ser una cadena de texto' }),
    (0, class_validator_1.MaxLength)(255, { message: 'La password no puede exceder los 255 caracteres' }),
    __metadata("design:type", String)
], CreatePacienteDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'El telefono es obligatorio' }),
    (0, class_validator_1.IsString)({ message: 'El telefono debe ser una cadena de texto' }),
    (0, class_validator_1.MaxLength)(20, { message: 'El telefono no puede exceder los 20 caracteres' }),
    __metadata("design:type", String)
], CreatePacienteDto.prototype, "telefono", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'La direccion es obligatoria' }),
    (0, class_validator_1.IsString)({ message: 'La direccion debe ser una cadena de texto' }),
    (0, class_validator_1.MaxLength)(255, { message: 'La direccion no puede exceder los 255 caracteres' }),
    __metadata("design:type", String)
], CreatePacienteDto.prototype, "direccion", void 0);
//# sourceMappingURL=create-paciente.dto.js.map