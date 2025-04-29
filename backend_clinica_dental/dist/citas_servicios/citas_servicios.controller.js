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
exports.CitasServiciosController = void 0;
const common_1 = require("@nestjs/common");
const citas_servicios_service_1 = require("./citas_servicios.service");
const create_citas_servicio_dto_1 = require("./dto/create-citas_servicio.dto");
const update_citas_servicio_dto_1 = require("./dto/update-citas_servicio.dto");
let CitasServiciosController = class CitasServiciosController {
    citasServiciosService;
    constructor(citasServiciosService) {
        this.citasServiciosService = citasServiciosService;
    }
    create(createCitasServicioDto) {
        return this.citasServiciosService.create(createCitasServicioDto);
    }
    findAll() {
        return this.citasServiciosService.findAll();
    }
    findOne(id) {
        return this.citasServiciosService.findOne(+id);
    }
    update(id, updateCitasServicioDto) {
        return this.citasServiciosService.update(+id, updateCitasServicioDto);
    }
    remove(id) {
        return this.citasServiciosService.remove(+id);
    }
};
exports.CitasServiciosController = CitasServiciosController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_citas_servicio_dto_1.CreateCitasServicioDto]),
    __metadata("design:returntype", void 0)
], CitasServiciosController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CitasServiciosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CitasServiciosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_citas_servicio_dto_1.UpdateCitasServicioDto]),
    __metadata("design:returntype", void 0)
], CitasServiciosController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CitasServiciosController.prototype, "remove", null);
exports.CitasServiciosController = CitasServiciosController = __decorate([
    (0, common_1.Controller)('citas-servicios'),
    __metadata("design:paramtypes", [citas_servicios_service_1.CitasServiciosService])
], CitasServiciosController);
//# sourceMappingURL=citas_servicios.controller.js.map