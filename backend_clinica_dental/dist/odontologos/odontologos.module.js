"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OdontologosModule = void 0;
const common_1 = require("@nestjs/common");
const odontologos_service_1 = require("./odontologos.service");
const odontologos_controller_1 = require("./odontologos.controller");
const typeorm_1 = require("@nestjs/typeorm");
const odontologo_entity_1 = require("./entities/odontologo.entity");
let OdontologosModule = class OdontologosModule {
};
exports.OdontologosModule = OdontologosModule;
exports.OdontologosModule = OdontologosModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([odontologo_entity_1.Odontologo])],
        controllers: [odontologos_controller_1.OdontologosController],
        providers: [odontologos_service_1.OdontologosService],
    })
], OdontologosModule);
//# sourceMappingURL=odontologos.module.js.map