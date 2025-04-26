import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateRolDto {
  //cargar solo los datos necesarios para crear un rol
  // instalando npm i --save class-validator class-transformer podemos hacer validaciones
  @IsNotEmpty({ message: 'El campo nombre es obligatorio' })
  @IsString({ message: 'El campo nombre debe ser de tipo cadena' })
  @MaxLength(50, {
    message: 'El campo nombre no debe ser mayor a 50 caracteres',
  })
  readonly name: string; // esto es un DTO
}
