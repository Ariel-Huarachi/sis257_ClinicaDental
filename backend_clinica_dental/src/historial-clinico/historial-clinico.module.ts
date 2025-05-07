import { Module } from '@nestjs/common';
import { HistorialClinicoService } from './historial-clinico.service';
import { HistorialClinicoController } from './historial-clinico.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HistorialClinico } from './entities/historial-clinico.entity';
import { Paciente } from 'src/pacientes/entities/paciente.entity';

@Module({
  imports: [TypeOrmModule.forFeature([HistorialClinico,Paciente])],
  controllers: [HistorialClinicoController],
  providers: [HistorialClinicoService],
})
export class HistorialClinicoModule {}
