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
exports.CreateOdontologosServicioDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateOdontologosServicioDto {
    idOdontologo;
    idServicio;
}
exports.CreateOdontologosServicioDto = CreateOdontologosServicioDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID del odontólogo que brindará el servicio' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'El campo idOdontologo es obligatorio' }),
    (0, class_validator_1.IsInt)({ message: 'El campo idOdontologo debe ser un número entero' }),
    (0, class_validator_1.IsPositive)({ message: 'El campo idOdontologo debe ser un número positivo' }),
    __metadata("design:type", Number)
], CreateOdontologosServicioDto.prototype, "idOdontologo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID del servicio que se asignará al odontólogo' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'El campo idServicio es obligatorio' }),
    (0, class_validator_1.IsInt)({ message: 'El campo idServicio debe ser un número entero' }),
    (0, class_validator_1.IsPositive)({ message: 'El campo idServicio debe ser un número positivo' }),
    __metadata("design:type", Number)
], CreateOdontologosServicioDto.prototype, "idServicio", void 0);
//# sourceMappingURL=create-odontologos_servicio.dto.js.map