import { Cliente } from 'src/clientes/entities/cliente.entity';
import { Odontologo } from 'src/odontologos/entities/odontologo.entity';
export declare class Rol {
    id: number;
    nombre_rol: string;
    fechaCreacion: Date;
    fechaModificacion: Date;
    fechaEliminacion: Date;
    clientes: Cliente[];
    odontologos: Odontologo[];
}
