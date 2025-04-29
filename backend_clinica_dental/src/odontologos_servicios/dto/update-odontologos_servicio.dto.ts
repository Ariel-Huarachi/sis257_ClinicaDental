import { PartialType } from '@nestjs/mapped-types';
import { CreateOdontologosServicioDto } from './create-odontologos_servicio.dto';

export class UpdateOdontologosServicioDto extends PartialType(CreateOdontologosServicioDto) {}
