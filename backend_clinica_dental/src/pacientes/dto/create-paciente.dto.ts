//pacientes(id INT, nombre VARCHAR(50), 
// primer_apellido VARCHAR(50), segundo_apellido VARCHAR(50), 
// email VARCHAR(100), password VARCHAR(255), telefono VARCHAR(20), 
// direccion VARCHAR(255), rol_id INT, 
// fecha_creacion DATETIME, fecha_modificacion DATETIME, fecha_eliminacion DATETIME)
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
    IsDefined,
    IsEmail,
    IsInt,
    IsNotEmpty,
    IsString,
    MaxLength,
  } from 'class-validator';
import { Rol } from 'src/roles/entities/rol.entity';
export class CreatePacienteDto {
    @ApiProperty()
    @IsNotEmpty({ message: 'El nombre es obligatorio' })
    @IsString({ message: 'El nombre debe ser una cadena de texto' })
    @MaxLength(50, { message: 'El nombre no puede exceder los 50 caracteres' })
    readonly nombre: string;    

    @ApiProperty()
    @IsNotEmpty({ message: 'El primer apellido es obligatorio' })
    @IsString({ message: 'El primer apellido debe ser una cadena de texto' })
    @MaxLength(50, { message: 'El primer apellido no puede exceder los 50 caracteres' })
    readonly primerApellido: string;

    @ApiProperty()
    @IsNotEmpty({ message: 'El segundo apellido es obligatorio' })
    @IsString({ message: 'El segundo apellido debe ser una cadena de texto' })
    @MaxLength(50, { message: 'El segundo apellido no puede exceder los 50 caracteres' })
    readonly segundoApellido: string;

    @ApiProperty()
    @IsNotEmpty({ message: 'El email es obligatorio' })
    @IsString({ message: 'El email debe ser una cadena de texto' })
    @MaxLength(100, { message: 'El email no puede exceder los 100 caracteres' })
    @IsEmail({}, { message: 'El campo debe ser un email' })
    readonly email: string;

    @ApiProperty()
    @IsNotEmpty({ message: 'La password es obligatoria' })
    @IsString({ message: 'La password debe ser una cadena de texto' })
    @MaxLength(255, { message: 'La password no puede exceder los 255 caracteres' })
    readonly password: string;

    @ApiProperty()
    @IsNotEmpty({ message: 'El telefono es obligatorio' })
    @IsString({ message: 'El telefono debe ser una cadena de texto' })
    @MaxLength(20, { message: 'El telefono no puede exceder los 20 caracteres' })
    readonly telefono: string;

    @ApiProperty()
    @IsNotEmpty({ message: 'La direccion es obligatoria' })
    @IsString({ message: 'La direccion debe ser una cadena de texto' })
    @MaxLength(255, { message: 'La direccion no puede exceder los 255 caracteres' })
    readonly direccion: string;
/*
    @ApiProperty()
    @Type(() => Number)
    @IsDefined({ message: 'El rol es obligatorio' })
    @IsInt({ message: 'El rol debe ser un número entero' })
    readonly idRol: Rol['id'];
*/
}
