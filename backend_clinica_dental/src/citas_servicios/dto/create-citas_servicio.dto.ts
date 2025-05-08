
import { ApiAcceptedResponse, ApiProperty } from '@nestjs/swagger';
import {
    IsDefined,
    IsNotEmpty,
    IsNumber,
    IsString,
    MaxLength,
  } from 'class-validator';
  
  //citas_servicios(id INT, cita_id INT, 
// servicio_id INT, precio_servicio DECIMAL(10,2), 
// fecha_creacion DATETIME, fecha_modificacion DATETIME)
export class CreateCitasServicioDto {
    @ApiProperty()
    @IsNumber({}, { message: 'El id de la cita debe ser un número' })
    @IsNotEmpty({ message: 'El id de la cita no puede estar vacío' })
    @IsNumber({}, { message: 'El id de la cita debe ser un número' })
    readonly idCita: number;

    @ApiProperty()
    @IsNumber({}, { message: 'El id del servicio debe ser un número' })
    @IsNotEmpty({ message: 'El id del servicio no puede estar vacío' })
    @IsNumber({}, { message: 'El id del servicio debe ser un número' })
    readonly idServicio: number;

    @ApiProperty()
    @IsNumber({}, { message: 'El precio del servicio debe ser un número' })
    @IsNotEmpty({ message: 'El precio del servicio no puede estar vacío' })
    @IsNumber({}, { message: 'El precio del servicio debe ser un número' })
    readonly precioServicio: number;

}
