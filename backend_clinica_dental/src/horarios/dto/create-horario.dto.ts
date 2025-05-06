
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
    IsDate,
    IsDefined,
    IsIn,
    IsNotEmpty,
    IsNumber,
    IsString,
    MaxLength,
  } from 'class-validator';
//horarios(id INT, odontologo_id INT, fecha DATE, hora TIME,
//  estado ENUM('Disponible', 'Reservado', 'Ocupado', 'No disponible'),
//  fecha_creacion DATETIME, fecha_modificacion DATETIME, fecha_eliminacion DATETIME)

export class CreateHorarioDto {

    @ApiProperty()
    @IsDefined({message:'El id del odontologo es requerido'})
    @IsNumber({}, {message:'El id del odontologo debe ser un numero'})
    readonly idOdontologo: number;

    @ApiProperty()
    @IsNotEmpty({message:'La fecha es requerida'})
    @IsDate({message:'La fecha debe ser una fecha valida'})
    @Type(() => Date)
    readonly fecha: Date;

    @ApiProperty()
    @IsNotEmpty({message:'La hora es requerida'})
    @IsString({message:'La hora debe ser una cadena de texto'})
    @MaxLength(25, {message:'La hora debe tener un maximo de 25 caracteres'})
    readonly hora: string;

    @ApiProperty()
    @IsNotEmpty({message:'El estado es requerido'})
    @IsString({message:'El estado debe ser una cadena de texto'})
    @MaxLength(25, {message:'El estado debe tener un maximo de 25 caracteres'})
    @IsIn(['Disponible', 'Reservado', 'Ocupado', 'No disponible'], { message: 'El estado debe ser Disponible, Reservado, Ocupado o No disponible' })
    readonly estado: string;


}
