
import { ApiProperty } from '@nestjs/swagger';
import {
    IsDefined,
    IsNotEmpty,
    IsNumber,
    IsString,
    MaxLength,
  } from 'class-validator';
import e from 'express';
//pagos(id INT, cita_id INT, 
// monto_pagado DECIMAL(10,2), 
// metodo_pago ENUM('Efectivo', 'Tarjeta', 'QR'), 
// fecha_pago DATETIME, fecha_creacion DATETIME,
//  fecha_modificacion DATETIME)
export class CreatePagoDto {
    @ApiProperty()
    @IsDefined({ message: 'El campo idCita es requerido' })
    @IsNumber({}, { message: 'El campo idCita debe ser un numero' })
    readonly idCita: number;

    @ApiProperty()
    @IsDefined({ message: 'El campo montoPagado es requerido' })
    @IsNumber({}, { message: 'El campo montoPagado debe ser un numero' })
    readonly montoPagado: number;

    @ApiProperty()
    @IsNotEmpty({ message: 'El campo metodoPago es requerido' })
    @IsString({ message: 'El campo metodoPago debe ser una cadena de texto' })
    @MaxLength(50, { message: 'El campo metodoPago no debe exceder los 50 caracteres' })
    readonly metodoPago: string;

    @ApiProperty()
    @IsDefined({ message: 'El campo fechaPago es requerido' })
    @IsNotEmpty({ message: 'El campo fechaPago no puede estar vacio' })
    @IsString({ message: 'El campo fechaPago debe ser una cadena de texto' })
    readonly fechaPago: Date;

    
}
