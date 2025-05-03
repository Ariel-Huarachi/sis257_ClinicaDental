import { ApiProperty } from '@nestjs/swagger';
import {
    IsDefined,
    IsNotEmpty,
    IsNumber,
    IsString,
    MaxLength,
  } from 'class-validator';
//citas(id INT, estado ENUM('Programada', 'Completada', 'Cancelada'),
//  cliente_id INT, odontologo_id INT, fecha_hora_inicio DATETIME, fecha_hora_fin DATETIME,
//  fecha_creacion DATETIME, fecha_modificacion DATETIME, fecha_eliminacion DATETIME)
export class CreateCitaDto {
    @ApiProperty()
    @IsNotEmpty({ message: 'El campo estado es obligatorio' })
    @IsString({ message: 'El campo estado debe ser un string o cadena' })
    @MaxLength(50, { message: 'El campo estado no debe exceder los 50 caracteres' })
    readonly estado: string;

    @ApiProperty()
    @IsDefined({ message: 'El campo fecha de inicio es obligatorio' })
    readonly fechaHoraInicio: Date;

    @ApiProperty()
    @IsDefined({ message: 'El campo fecha de fin es obligatorio' }) 
    readonly fechaHoraFin: Date;

    @ApiProperty()
    @IsDefined({ message: 'El campo idCliente es obligatorio' })
    @IsNumber({}, { message: 'El campo idCliente debe ser un número' })
    readonly idPaciente: number;

    @ApiProperty()
    @IsDefined({ message: 'El campo idOdontologo es obligatorio' })
    @IsNumber({}, { message: 'El campo idOdontologo debe ser un número' })
    readonly idOdontologo: number;

    
    


}
