import { Rol } from 'src/roles/entities/rol.entity';
export declare class Paciente {
    id: number;
    nombre: string;
    primer_apellido: string;
    segundo_apellido: string;
    email: string;
    password: string;
    telefono: string;
    direccion: string;
    idRol: number;
    fechaCreacion: Date;
    fechaModificacion: Date;
    fechaEliminacion: Date;
    rol: Rol;
}
