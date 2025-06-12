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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const odontologos_service_1 = require("../odontologos/odontologos.service");
const pacientes_service_1 = require("../pacientes/pacientes.service");
let AuthService = class AuthService {
    odontologoService;
    PacientesService;
    jwtService;
    constructor(odontologoService, PacientesService, jwtService) {
        this.odontologoService = odontologoService;
        this.PacientesService = PacientesService;
        this.jwtService = jwtService;
    }
    async login(authLoginDto) {
        const { email, clave } = authLoginDto;
        let user;
        console.log('Intentando autenticar como odontólogo...');
        user = await this.odontologoService.validate(email, clave);
        if (!user) {
            console.log('No es odontólogo, intentando autenticar como paciente...');
            user = await this.PacientesService.validate(email, clave);
        }
        if (!user) {
            console.error('Credenciales inválidas para ambos roles.');
            throw new common_1.UnauthorizedException('Credenciales inválidas');
        }
        const payload = {
            sub: user.id,
            role: user.rol.id === 2 ? 'odontologo' : 'paciente',
        };
        console.log('Usuario autenticado:', payload);
        const access_token = await this.getAccessToken(payload);
        return {
            id: user.id,
            name: user.nombre,
            email: user.email,
            rol: payload.role,
            access_token,
        };
    }
    async verifyPayload(payload) {
        let user;
        console.log('Verificando el payload:', payload);
        if (payload.role === 'odontologo') {
            user = await this.odontologoService.findOne(payload.sub);
        }
        else if (payload.role === 'paciente') {
            user = await this.PacientesService.findOne(payload.sub);
        }
        else {
            console.error(`Rol inválido: ${payload.role}`);
            throw new common_1.UnauthorizedException(`Rol inválido: ${payload.role}`);
        }
        if (!user) {
            console.error(`Usuario inválido con ID: ${payload.sub}`);
            throw new common_1.UnauthorizedException(`Usuario inválido: ${payload.sub}`);
        }
        return user;
    }
    async getAccessToken(payload) {
        try {
            const accessToken = await this.jwtService.sign(payload, {
                secret: process.env.JWT_TOKEN,
                expiresIn: process.env.JWT_TOKEN_EXPIRATION,
            });
            return accessToken;
        }
        catch (error) {
            console.error('Error al generar el token JWT:', error);
            throw new common_1.UnauthorizedException('Error al generar el token JWT');
        }
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [odontologos_service_1.OdontologosService,
        pacientes_service_1.PacientesService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map