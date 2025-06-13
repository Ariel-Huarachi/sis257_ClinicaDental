import { Cita } from 'src/citas/entities/cita.entity';
import { Rol } from 'src/roles/entities/role.entity';
export declare class Cliente {
    id: number;
    nombre: string;
    primerApellido: string;
    segundoApellido: string;
    email: string;
    password: string;
    telefono: string;
    direccion: string;
    rol_id: number;
    fechaCreacion: Date;
    fechaModificacion: Date;
    fechaEliminacion: Date;
    hashPassword(): Promise<void>;
    validatePassword(plainPassword: string): Promise<boolean>;
    rol: Rol;
    citas: Cita[];
}
