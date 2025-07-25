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
exports.AuthLoginDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class AuthLoginDto {
    email;
    clave;
}
exports.AuthLoginDto = AuthLoginDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'El campo Email no debe ser vacío' }),
    (0, class_validator_1.IsString)({ message: 'El campo Email debe ser de tipo cadena' }),
    (0, class_validator_1.MaxLength)(80, { message: 'El campo Email excede los 80 caracteres' }),
    (0, class_validator_1.MinLength)(4, { message: 'El campo Email es menor a 4 caracteres' }),
    (0, class_validator_1.IsEmail)({}, { message: 'El campo Email no es un correo válido' }),
    __metadata("design:type", String)
], AuthLoginDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'El campo Clave/Contraseña no debe ser vacío' }),
    (0, class_validator_1.IsString)({ message: 'El campo Clave/Contraseña debe ser de tipo cadena' }),
    __metadata("design:type", String)
], AuthLoginDto.prototype, "clave", void 0);
//# sourceMappingURL=auth-login.dto.js.map