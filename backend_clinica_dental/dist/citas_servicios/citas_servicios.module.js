"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CitasServiciosModule = void 0;
const common_1 = require("@nestjs/common");
const citas_servicios_service_1 = require("./citas_servicios.service");
const citas_servicios_controller_1 = require("./citas_servicios.controller");
const typeorm_1 = require("@nestjs/typeorm");
const citas_servicio_entity_1 = require("./entities/citas_servicio.entity");
const servicio_entity_1 = require("../servicios/entities/servicio.entity");
const cita_entity_1 = require("../citas/entities/cita.entity");
let CitasServiciosModule = class CitasServiciosModule {
};
exports.CitasServiciosModule = CitasServiciosModule;
exports.CitasServiciosModule = CitasServiciosModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([citas_servicio_entity_1.CitasServicio, servicio_entity_1.Servicio, cita_entity_1.Cita])],
        controllers: [citas_servicios_controller_1.CitasServiciosController],
        providers: [citas_servicios_service_1.CitasServiciosService],
    })
], CitasServiciosModule);
//# sourceMappingURL=citas_servicios.module.js.map