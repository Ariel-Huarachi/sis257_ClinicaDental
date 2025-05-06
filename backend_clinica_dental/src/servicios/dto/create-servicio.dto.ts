import { ApiProperty } from '@nestjs/swagger';
import {
  IsDefined,
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
} from 'class-validator';

//servicios(id INT, nombre VARCHAR(100), 
// descripcion TEXT, precio DECIMAL(10,2), 
// duracion INT, fecha_creacion DATETIME,
//  fecha_modificacion DATETIME, 
// fecha_eliminacion DATETIME)

export class CreateServicioDto {
  @ApiProperty({
    example: 'Limpieza Dental',
    description: 'Nombre del servicio (máximo 100 caracteres)',
  })
  @IsNotEmpty({ message: 'El campo nombre es obligatorio' })
  @IsString({ message: 'El campo nombre debe ser un string o cadena' })
  @MaxLength(100, {
    message: 'El campo nombre debe tener un máximo de 100 caracteres',
  })
  readonly nombre: string;

  @ApiProperty({
    example: 'Limpieza profunda para eliminar placa y sarro.',
    description: 'Descripción del servicio (texto libre)',
  })
  @IsNotEmpty({ message: 'El campo descripcion es obligatorio' })
  @IsString({ message: 'El campo descripcion debe ser un string o cadena' })
  readonly descripcion: string;

  @ApiProperty({
    example: 0.0,
    description: 'Precio del servicio (hasta 2 decimales)',
    type: 'number',
  })
  @IsDefined({ message: 'El campo precio es obligatorio' })
  @IsNumber({}, { message: 'El campo precio debe ser un número' })
  readonly precio: number;

  @ApiProperty()
  @IsDefined({ message: 'El campo duracion es obligatorio' })
  @IsNumber({}, { message: 'El campo duracion debe ser un número' })
  readonly duracion: number;
}
