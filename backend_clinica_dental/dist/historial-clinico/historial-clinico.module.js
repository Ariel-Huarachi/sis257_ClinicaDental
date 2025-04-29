"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HistorialClinicoModule = void 0;
const common_1 = require("@nestjs/common");
const historial_clinico_service_1 = require("./historial-clinico.service");
const historial_clinico_controller_1 = require("./historial-clinico.controller");
const typeorm_1 = require("@nestjs/typeorm");
const historial_clinico_entity_1 = require("./entities/historial-clinico.entity");
let HistorialClinicoModule = class HistorialClinicoModule {
};
exports.HistorialClinicoModule = HistorialClinicoModule;
exports.HistorialClinicoModule = HistorialClinicoModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([historial_clinico_entity_1.HistorialClinico])],
        controllers: [historial_clinico_controller_1.HistorialClinicoController],
        providers: [historial_clinico_service_1.HistorialClinicoService],
    })
], HistorialClinicoModule);
//# sourceMappingURL=historial-clinico.module.js.map