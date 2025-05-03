import { Module } from '@nestjs/common';
import { CitasService } from './citas.service';
import { CitasController } from './citas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cita } from './entities/cita.entity';
import { Paciente } from 'src/pacientes/entities/paciente.entity';
import { Odontologo } from 'src/odontologos/entities/odontologo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cita, Paciente, Odontologo])],
  controllers: [CitasController],
  providers: [CitasService],
})
export class CitasModule {}
