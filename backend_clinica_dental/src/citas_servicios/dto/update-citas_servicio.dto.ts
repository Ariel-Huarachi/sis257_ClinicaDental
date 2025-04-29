import { PartialType } from '@nestjs/mapped-types';
import { CreateCitasServicioDto } from './create-citas_servicio.dto';

export class UpdateCitasServicioDto extends PartialType(CreateCitasServicioDto) {}
