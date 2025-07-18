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
exports.OdontologosServiciosController = void 0;
const common_1 = require("@nestjs/common");
const odontologos_servicios_service_1 = require("./odontologos_servicios.service");
const create_odontologos_servicio_dto_1 = require("./dto/create-odontologos_servicio.dto");
const update_odontologos_servicio_dto_1 = require("./dto/update-odontologos_servicio.dto");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
let OdontologosServiciosController = class OdontologosServiciosController {
    odontologosServiciosService;
    constructor(odontologosServiciosService) {
        this.odontologosServiciosService = odontologosServiciosService;
    }
    create(createOdontologosServicioDto) {
        return this.odontologosServiciosService.create(createOdontologosServicioDto);
    }
    findAll() {
        return this.odontologosServiciosService.findAll();
    }
    findOne(id) {
        return this.odontologosServiciosService.findOne(+id);
    }
    update(id, updateOdontologosServicioDto) {
        return this.odontologosServiciosService.update(+id, updateOdontologosServicioDto);
    }
    remove(id) {
        return this.odontologosServiciosService.remove(+id);
    }
};
exports.OdontologosServiciosController = OdontologosServiciosController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_odontologos_servicio_dto_1.CreateOdontologosServicioDto]),
    __metadata("design:returntype", void 0)
], OdontologosServiciosController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], OdontologosServiciosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OdontologosServiciosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_odontologos_servicio_dto_1.UpdateOdontologosServicioDto]),
    __metadata("design:returntype", void 0)
], OdontologosServiciosController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OdontologosServiciosController.prototype, "remove", null);
exports.OdontologosServiciosController = OdontologosServiciosController = __decorate([
    (0, swagger_1.ApiTags)('OdontologosServicios'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('odontologos-servicios'),
    __metadata("design:paramtypes", [odontologos_servicios_service_1.OdontologosServiciosService])
], OdontologosServiciosController);
//# sourceMappingURL=odontologos_servicios.controller.js.map