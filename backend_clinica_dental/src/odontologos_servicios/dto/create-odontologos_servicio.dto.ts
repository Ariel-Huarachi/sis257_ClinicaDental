import { ApiProperty } from '@nestjs/swagger';
import { 
    IsNotEmpty, 
    IsInt, 
    IsPositive 
} from 'class-validator';

export class CreateOdontologosServicioDto {

    @ApiProperty({ description: 'ID del odontólogo que brindará el servicio' })
    @IsNotEmpty({ message: 'El campo idOdontologo es obligatorio' })
    @IsInt({ message: 'El campo idOdontologo debe ser un número entero' })
    @IsPositive({ message: 'El campo idOdontologo debe ser un número positivo' })
    readonly idOdontologo: number;

    @ApiProperty({ description: 'ID del servicio que se asignará al odontólogo' })
    @IsNotEmpty({ message: 'El campo idServicio es obligatorio' })
    @IsInt({ message: 'El campo idServicio debe ser un número entero' })
    @IsPositive({ message: 'El campo idServicio debe ser un número positivo' })
    readonly idServicio: number;

}
