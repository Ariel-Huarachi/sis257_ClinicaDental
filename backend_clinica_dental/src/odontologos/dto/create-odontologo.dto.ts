import { ApiProperty } from '@nestjs/swagger';
import {
    IsEmail,
    IsNotEmpty,
    IsString,
    MaxLength,
  } from 'class-validator';
  //odontologos(id INT, nombre VARCHAR(50), primer_apellido
//  VARCHAR(50), segundo_apellido VARCHAR(50),
//  email VARCHAR(100), password varchar(250) telefono VARCHAR(20), 
// direccion VARCHAR(255),
//  especialidad VARCHAR(100), 
// rol_id INT, fecha_creacion DATETIME, 
// fecha_modificacion DATETIME, 
// fecha_eliminacion DATETIME)
export class CreateOdontologoDto {

    @ApiProperty()
    @IsNotEmpty({ message: 'El campo nombre es obligatorio' })
    @IsString({ message: 'El campo nombre debe ser un string o cadena' })
    @MaxLength(50, {message: 'El campo nombre debe tener un máximo de 50 caracteres',})
    readonly nombre: string;

    @ApiProperty()
    @IsNotEmpty({ message: 'El campo primer_apellido es obligatorio' })
    @IsString({ message: 'El campo primer_apellido debe ser un string o cadena' })
    @MaxLength(50, {message: 'El campo primer_apellido debe tener un máximo de 50 caracteres',})
    readonly primerApellido: string;

    @ApiProperty()
    @IsNotEmpty({ message: 'El campo segundo_apellido es obligatorio' })
    @IsString({ message: 'El campo segundo_apellido debe ser un string o cadena' })
    @MaxLength(50, {message: 'El campo segundo_apellido debe tener un máximo de 50 caracteres',})
    readonly segundoApellido: string;  

    @ApiProperty()
    @IsNotEmpty({ message: 'El campo email es obligatorio' })
    @IsEmail({}, { message: 'El campo email debe ser un email válido' })
    @MaxLength(100, {message: 'El campo email debe tener un máximo de 100 caracteres',})
    @IsEmail({}, { message: 'El campo debe ser un email' })
    readonly email: string;

    @ApiProperty()
    @IsNotEmpty({ message: 'El campo password es obligatorio' })
    @IsString({ message: 'El campo password debe ser un string o cadena' })
    @MaxLength(250, {message: 'El campo password debe tener un máximo de 250 caracteres',})
    readonly password?: string;

    @ApiProperty()
    @IsNotEmpty({ message: 'El campo telefono es obligatorio' })
    @IsString({ message: 'El campo telefono debe ser un string o cadena' })
    @MaxLength(20, {message: 'El campo telefono debe tener un máximo de 20 caracteres',})
    readonly telefono: string;

    @ApiProperty()
    @IsNotEmpty({ message: 'El campo direccion es obligatorio' })
    @IsString({ message: 'El campo direccion debe ser un string o cadena' })
    @MaxLength(255, {message: 'El campo direccion debe tener un máximo de 255 caracteres',})
    readonly direccion: string;

    @ApiProperty()
    @IsNotEmpty({ message: 'El campo especialidad es obligatorio' })
    @IsString({ message: 'El campo especialidad debe ser un string o cadena' }) 
    @MaxLength(100, {message: 'El campo especialidad debe tener un máximo de 100 caracteres',})
    readonly especialidad: string;



}
