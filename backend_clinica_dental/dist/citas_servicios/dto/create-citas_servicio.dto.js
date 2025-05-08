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
exports.CreateCitasServicioDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateCitasServicioDto {
    idCita;
    idServicio;
    precioServicio;
}
exports.CreateCitasServicioDto = CreateCitasServicioDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)({}, { message: 'El id de la cita debe ser un número' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'El id de la cita no puede estar vacío' }),
    (0, class_validator_1.IsNumber)({}, { message: 'El id de la cita debe ser un número' }),
    __metadata("design:type", Number)
], CreateCitasServicioDto.prototype, "idCita", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)({}, { message: 'El id del servicio debe ser un número' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'El id del servicio no puede estar vacío' }),
    (0, class_validator_1.IsNumber)({}, { message: 'El id del servicio debe ser un número' }),
    __metadata("design:type", Number)
], CreateCitasServicioDto.prototype, "idServicio", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)({}, { message: 'El precio del servicio debe ser un número' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'El precio del servicio no puede estar vacío' }),
    (0, class_validator_1.IsNumber)({}, { message: 'El precio del servicio debe ser un número' }),
    __metadata("design:type", Number)
], CreateCitasServicioDto.prototype, "precioServicio", void 0);
//# sourceMappingURL=create-citas_servicio.dto.js.map