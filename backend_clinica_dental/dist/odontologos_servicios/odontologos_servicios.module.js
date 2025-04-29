"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OdontologosServiciosModule = void 0;
const common_1 = require("@nestjs/common");
const odontologos_servicios_service_1 = require("./odontologos_servicios.service");
const odontologos_servicios_controller_1 = require("./odontologos_servicios.controller");
const typeorm_1 = require("@nestjs/typeorm");
const odontologos_servicio_entity_1 = require("./entities/odontologos_servicio.entity");
let OdontologosServiciosModule = class OdontologosServiciosModule {
};
exports.OdontologosServiciosModule = OdontologosServiciosModule;
exports.OdontologosServiciosModule = OdontologosServiciosModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([odontologos_servicio_entity_1.OdontologosServicio])],
        controllers: [odontologos_servicios_controller_1.OdontologosServiciosController],
        providers: [odontologos_servicios_service_1.OdontologosServiciosService],
    })
], OdontologosServiciosModule);
//# sourceMappingURL=odontologos_servicios.module.js.map