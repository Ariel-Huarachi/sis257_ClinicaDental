import { Module } from '@nestjs/common';
import { OdontologosServiciosService } from './odontologos_servicios.service';
import { OdontologosServiciosController } from './odontologos_servicios.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OdontologosServicio } from './entities/odontologos_servicio.entity';

@Module({
   imports: [TypeOrmModule.forFeature([OdontologosServicio])],
  controllers: [OdontologosServiciosController],
  providers: [OdontologosServiciosService],
})
export class OdontologosServiciosModule {}
