import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreateRoleDto {
    /*
    @ApiProperty()
    @IsNotEmpty({ message: 'El campo nombre es obligatorio' })
    @IsString({ message: 'El campo nombre debe ser de tipo cadena' })
    @MaxLength(50, { message: 'El campo nombre no debe ser mayor a 50 caracteres' })
    readonly nombre: string;*/
    //roles(id INT, nombre_rol VARCHAR(50), fecha_creacion DATETIME, fecha_modificacion DATETIME, fecha_eliminacion DATETIME)
   
    @ApiProperty()
    @IsNotEmpty({ message: 'El campo nombre_rol es obligatorio' })
    @IsString({ message: 'El campo nombre_rol debe ser de tipo cadena' })
    @MaxLength(50, { message: 'El campo nombre_rol no debe ser mayor a 50 caracteres' })
    readonly nombre_rol: string;


    


}
