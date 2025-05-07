import { ApiProperty } from '@nestjs/swagger';
import {
    IsDefined,
    IsNotEmpty,
    IsNumber,
    IsString,
    MaxLength,
  } from 'class-validator';
  //historial_clinico(id INT, cliente_id INT, diagnostico TEXT, 
// tratamiento_realizado TEXT, observaciones TEXT, 
// fecha_tratamiento DATE, fecha_creacion DATETIME, 
// fecha_modificacion DATETIME)
export class CreateHistorialClinicoDto {
    @ApiProperty()
    @IsDefined({message: 'El id del paciente es requerido.'})
    @IsNotEmpty({message: 'El id del paciente no puede estar vacío.'})
    @IsNumber({}, {message: 'El id del paciente debe ser un número.'})
    readonly idCliente: number;

    @ApiProperty()
    @IsDefined({message: 'El diagnóstico es requerido.'})
    @IsNotEmpty({message: 'El diagnóstico no puede estar vacío.'})
    @IsString({message: 'El diagnóstico debe ser una cadena de texto.'})
    @MaxLength(255, {message: 'El diagnóstico no puede exceder los 255 caracteres.'})
    readonly diagnostico: string;

    @ApiProperty()
    @IsDefined({message: 'El tratamiento realizado es requerido.'})
    @IsNotEmpty({message: 'El tratamiento realizado no puede estar vacío.'})
    @IsString({message: 'El tratamiento realizado debe ser una cadena de texto.'})
    @MaxLength(255, {message: 'El tratamiento realizado no puede exceder los 255 caracteres.'})
    readonly tratamientoRealizado: string;

    @ApiProperty()
    @IsDefined({message: 'Las observaciones son requeridas.'})
    @IsNotEmpty({message: 'Las observaciones no pueden estar vacías.'})
    @IsString({message: 'Las observaciones deben ser una cadena de texto.'})
    @MaxLength(255, {message: 'Las observaciones no pueden exceder los 255 caracteres.'})
    readonly observaciones: string;

    @ApiProperty({ example: '2023-10-01' })
    @IsDefined({ message: 'La fecha del tratamiento es requerida.' })
    @IsNotEmpty({ message: 'La fecha del tratamiento no puede estar vacía.' })
    @IsString({ message: 'La fecha del tratamiento debe ser una cadena de texto.' })
    readonly fechaTratamiento: string;
}
