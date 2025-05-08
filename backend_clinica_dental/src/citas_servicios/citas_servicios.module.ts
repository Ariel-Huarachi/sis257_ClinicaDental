import { Module } from '@nestjs/common';
import { CitasServiciosService } from './citas_servicios.service';
import { CitasServiciosController } from './citas_servicios.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CitasServicio } from './entities/citas_servicio.entity';
import { Servicio } from 'src/servicios/entities/servicio.entity';
import { Cita } from 'src/citas/entities/cita.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CitasServicio, Servicio, Cita])],
  controllers: [CitasServiciosController],
  providers: [CitasServiciosService],
})
export class CitasServiciosModule {}
