import { Module } from '@nestjs/common';
import { CitasServiciosService } from './citas_servicios.service';
import { CitasServiciosController } from './citas_servicios.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CitasServicio } from './entities/citas_servicio.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CitasServicio])],
  controllers: [CitasServiciosController],
  providers: [CitasServiciosService],
})
export class CitasServiciosModule {}
