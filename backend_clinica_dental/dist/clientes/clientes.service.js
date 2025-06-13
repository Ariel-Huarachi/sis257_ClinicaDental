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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const cliente_entity_1 = require("./entities/cliente.entity");
const typeorm_2 = require("typeorm");
let ClientesService = class ClientesService {
    constructor(clientesRepository) {
        this.clientesRepository = clientesRepository;
    }
    async create(createClienteDto) {
        const buscarRepetidos = await this.clientesRepository.findOne({
            where: [{ email: createClienteDto.email }],
        });
        if (buscarRepetidos) {
            throw new common_1.ConflictException('El email ya existe');
        }
        const cliente = new cliente_entity_1.Cliente();
        cliente.nombre = createClienteDto.nombre.trim();
        cliente.primerApellido = createClienteDto.primerApellido.trim();
        cliente.segundoApellido = createClienteDto.segundoApellido.trim();
        cliente.email = createClienteDto.email.trim();
        cliente.password = process.env.DEFAULT_PASSWORD;
        cliente.telefono = createClienteDto.telefono.trim();
        cliente.direccion = createClienteDto.direccion.trim();
        return this.clientesRepository.save(cliente);
    }
    async findAll() {
        return this.clientesRepository.find({ relations: ['rol'] });
    }
    async findOne(id) {
        const cliente = await this.clientesRepository.findOneBy({ id });
        if (!cliente) {
            throw new common_1.ConflictException('El cliente no existe');
        }
        return cliente;
    }
    async findAuthenticatedUser(id) {
        return this.findOne(id);
    }
    async update(id, updateClienteDto) {
        const Cliente = await this.findOne(id);
        const clienteUpdate = Object.assign(Cliente, updateClienteDto);
        return this.clientesRepository.save(clienteUpdate);
    }
    async remove(id) {
        const cliente = await this.findOne(id);
        return this.clientesRepository.softRemove(cliente);
    }
    async validate(email, clave) {
        const emailOk = await this.clientesRepository.findOne({
            where: { email },
            select: ['id', 'nombre', 'email', 'password'],
            relations: ['rol'],
        });
        if (!emailOk) {
            return null;
        }
        const isPasswordValid = await emailOk.validatePassword(clave);
        if (!isPasswordValid) {
            return null;
        }
        return emailOk;
    }
    async cambiarPassword(userId, passwordActual, nuevaPassword) {
        const cliente = await this.findOne(userId);
        if (!cliente) {
            throw new common_1.NotFoundException('Cliente no encontrado.');
        }
        const isPasswordValid = await cliente.validatePassword(passwordActual);
        if (!isPasswordValid) {
            throw new common_1.UnauthorizedException('La contraseña actual es incorrecta.');
        }
        cliente.password = nuevaPassword;
        await this.clientesRepository.save(cliente);
        return 'La contraseña ha sido actualizada correctamente.';
    }
};
exports.ClientesService = ClientesService;
exports.ClientesService = ClientesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(cliente_entity_1.Cliente)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ClientesService);
//# sourceMappingURL=clientes.service.js.map