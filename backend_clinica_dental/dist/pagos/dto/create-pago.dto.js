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
exports.CreatePagoDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreatePagoDto {
    idCita;
    montoPagado;
    metodoPago;
    fechaPago;
}
exports.CreatePagoDto = CreatePagoDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsDefined)({ message: 'El campo idCita es requerido' }),
    (0, class_validator_1.IsNumber)({}, { message: 'El campo idCita debe ser un numero' }),
    __metadata("design:type", Number)
], CreatePagoDto.prototype, "idCita", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsDefined)({ message: 'El campo montoPagado es requerido' }),
    (0, class_validator_1.IsNumber)({}, { message: 'El campo montoPagado debe ser un numero' }),
    __metadata("design:type", Number)
], CreatePagoDto.prototype, "montoPagado", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'El campo metodoPago es requerido' }),
    (0, class_validator_1.IsString)({ message: 'El campo metodoPago debe ser una cadena de texto' }),
    (0, class_validator_1.MaxLength)(50, { message: 'El campo metodoPago no debe exceder los 50 caracteres' }),
    __metadata("design:type", String)
], CreatePagoDto.prototype, "metodoPago", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsDefined)({ message: 'El campo fechaPago es requerido' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'El campo fechaPago no puede estar vacio' }),
    (0, class_validator_1.IsString)({ message: 'El campo fechaPago debe ser una cadena de texto' }),
    __metadata("design:type", Date)
], CreatePagoDto.prototype, "fechaPago", void 0);
//# sourceMappingURL=create-pago.dto.js.map