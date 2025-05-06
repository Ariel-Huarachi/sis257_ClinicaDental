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
exports.CreateHorarioDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class CreateHorarioDto {
    idOdontologo;
    fecha;
    hora;
    estado;
}
exports.CreateHorarioDto = CreateHorarioDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsDefined)({ message: 'El id del odontologo es requerido' }),
    (0, class_validator_1.IsNumber)({}, { message: 'El id del odontologo debe ser un numero' }),
    __metadata("design:type", Number)
], CreateHorarioDto.prototype, "idOdontologo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'La fecha es requerida' }),
    (0, class_validator_1.IsDate)({ message: 'La fecha debe ser una fecha valida' }),
    (0, class_transformer_1.Type)(() => Date),
    __metadata("design:type", Date)
], CreateHorarioDto.prototype, "fecha", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'La hora es requerida' }),
    (0, class_validator_1.IsString)({ message: 'La hora debe ser una cadena de texto' }),
    (0, class_validator_1.MaxLength)(25, { message: 'La hora debe tener un maximo de 25 caracteres' }),
    __metadata("design:type", String)
], CreateHorarioDto.prototype, "hora", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'El estado es requerido' }),
    (0, class_validator_1.IsString)({ message: 'El estado debe ser una cadena de texto' }),
    (0, class_validator_1.MaxLength)(25, { message: 'El estado debe tener un maximo de 25 caracteres' }),
    (0, class_validator_1.IsIn)(['Disponible', 'Reservado', 'Ocupado', 'No disponible'], { message: 'El estado debe ser Disponible, Reservado, Ocupado o No disponible' }),
    __metadata("design:type", String)
], CreateHorarioDto.prototype, "estado", void 0);
//# sourceMappingURL=create-horario.dto.js.map