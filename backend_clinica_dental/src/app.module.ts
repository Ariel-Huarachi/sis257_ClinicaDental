import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { RolesModule } from './roles/roles.module';
import { OdontologosModule } from './odontologos/odontologos.module';
import { PacientesModule } from './pacientes/pacientes.module';
import { HorariosModule } from './horarios/horarios.module';
import { CitasModule } from './citas/citas.module';
import { HistorialClinicoModule } from './historial-clinico/historial-clinico.module';
import { PagosModule } from './pagos/pagos.module';
import { ServiciosModule } from './servicios/servicios.module';
import { OdontologosServiciosModule } from './odontologos_servicios/odontologos_servicios.module';
import { CitasServiciosModule } from './citas_servicios/citas_servicios.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
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
    RolesModule,
    OdontologosModule,
    PacientesModule,
    HorariosModule,
    CitasModule,
    HistorialClinicoModule,
    PagosModule,
    ServiciosModule,
    OdontologosServiciosModule,
    CitasServiciosModule,
    AuthModule,
    

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
