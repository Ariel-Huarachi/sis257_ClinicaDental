"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const config_1 = require("@nestjs/config");
const roles_module_1 = require("./roles/roles.module");
const odontologos_module_1 = require("./odontologos/odontologos.module");
const pacientes_module_1 = require("./pacientes/pacientes.module");
const horarios_module_1 = require("./horarios/horarios.module");
const citas_module_1 = require("./citas/citas.module");
const historial_clinico_module_1 = require("./historial-clinico/historial-clinico.module");
const pagos_module_1 = require("./pagos/pagos.module");
const servicios_module_1 = require("./servicios/servicios.module");
const odontologos_servicios_module_1 = require("./odontologos_servicios/odontologos_servicios.module");
const citas_servicios_module_1 = require("./citas_servicios/citas_servicios.module");
const auth_module_1 = require("./auth/auth.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: process.env.DB_HOST,
                port: Number(process.env.DB_PORT),
                username: process.env.DB_USERNAME,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_NAME,
                entities: [__dirname + '*/**/entities/*.{ts|js}'],
                synchronize: true,
                autoLoadEntities: true,
            }),
            roles_module_1.RolesModule,
            odontologos_module_1.OdontologosModule,
            pacientes_module_1.PacientesModule,
            horarios_module_1.HorariosModule,
            citas_module_1.CitasModule,
            historial_clinico_module_1.HistorialClinicoModule,
            pagos_module_1.PagosModule,
            servicios_module_1.ServiciosModule,
            odontologos_servicios_module_1.OdontologosServiciosModule,
            citas_servicios_module_1.CitasServiciosModule,
            auth_module_1.AuthModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map