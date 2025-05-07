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
exports.CreateHistorialClinicoDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateHistorialClinicoDto {
    idCliente;
    diagnostico;
    tratamientoRealizado;
    observaciones;
    fechaTratamiento;
}
exports.CreateHistorialClinicoDto = CreateHistorialClinicoDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsDefined)({ message: 'El id del paciente es requerido.' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'El id del paciente no puede estar vacío.' }),
    (0, class_validator_1.IsNumber)({}, { message: 'El id del paciente debe ser un número.' }),
    __metadata("design:type", Number)
], CreateHistorialClinicoDto.prototype, "idCliente", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsDefined)({ message: 'El diagnóstico es requerido.' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'El diagnóstico no puede estar vacío.' }),
    (0, class_validator_1.IsString)({ message: 'El diagnóstico debe ser una cadena de texto.' }),
    (0, class_validator_1.MaxLength)(255, { message: 'El diagnóstico no puede exceder los 255 caracteres.' }),
    __metadata("design:type", String)
], CreateHistorialClinicoDto.prototype, "diagnostico", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsDefined)({ message: 'El tratamiento realizado es requerido.' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'El tratamiento realizado no puede estar vacío.' }),
    (0, class_validator_1.IsString)({ message: 'El tratamiento realizado debe ser una cadena de texto.' }),
    (0, class_validator_1.MaxLength)(255, { message: 'El tratamiento realizado no puede exceder los 255 caracteres.' }),
    __metadata("design:type", String)
], CreateHistorialClinicoDto.prototype, "tratamientoRealizado", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsDefined)({ message: 'Las observaciones son requeridas.' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Las observaciones no pueden estar vacías.' }),
    (0, class_validator_1.IsString)({ message: 'Las observaciones deben ser una cadena de texto.' }),
    (0, class_validator_1.MaxLength)(255, { message: 'Las observaciones no pueden exceder los 255 caracteres.' }),
    __metadata("design:type", String)
], CreateHistorialClinicoDto.prototype, "observaciones", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2023-10-01' }),
    (0, class_validator_1.IsDefined)({ message: 'La fecha del tratamiento es requerida.' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'La fecha del tratamiento no puede estar vacía.' }),
    (0, class_validator_1.IsString)({ message: 'La fecha del tratamiento debe ser una cadena de texto.' }),
    __metadata("design:type", String)
], CreateHistorialClinicoDto.prototype, "fechaTratamiento", void 0);
//# sourceMappingURL=create-historial-clinico.dto.js.map