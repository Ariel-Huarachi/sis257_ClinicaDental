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
exports.CreateServicioDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateServicioDto {
    nombre;
    descripcion;
    precio;
    duracion;
}
exports.CreateServicioDto = CreateServicioDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Limpieza Dental',
        description: 'Nombre del servicio (máximo 100 caracteres)',
    }),
    (0, class_validator_1.IsNotEmpty)({ message: 'El campo nombre es obligatorio' }),
    (0, class_validator_1.IsString)({ message: 'El campo nombre debe ser un string o cadena' }),
    (0, class_validator_1.MaxLength)(100, {
        message: 'El campo nombre debe tener un máximo de 100 caracteres',
    }),
    __metadata("design:type", String)
], CreateServicioDto.prototype, "nombre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Limpieza profunda para eliminar placa y sarro.',
        description: 'Descripción del servicio (texto libre)',
    }),
    (0, class_validator_1.IsNotEmpty)({ message: 'El campo descripcion es obligatorio' }),
    (0, class_validator_1.IsString)({ message: 'El campo descripcion debe ser un string o cadena' }),
    __metadata("design:type", String)
], CreateServicioDto.prototype, "descripcion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 0.0,
        description: 'Precio del servicio (hasta 2 decimales)',
        type: 'number',
    }),
    (0, class_validator_1.IsDefined)({ message: 'El campo precio es obligatorio' }),
    (0, class_validator_1.IsNumber)({}, { message: 'El campo precio debe ser un número' }),
    __metadata("design:type", Number)
], CreateServicioDto.prototype, "precio", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsDefined)({ message: 'El campo duracion es obligatorio' }),
    (0, class_validator_1.IsNumber)({}, { message: 'El campo duracion debe ser un número' }),
    __metadata("design:type", Number)
], CreateServicioDto.prototype, "duracion", void 0);
//# sourceMappingURL=create-servicio.dto.js.map