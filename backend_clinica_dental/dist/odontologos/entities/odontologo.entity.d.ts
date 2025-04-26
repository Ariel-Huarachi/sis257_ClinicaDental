import { Rol } from 'src/roles/entities/rol.entity';
export declare class Odontologo {
    id: number;
    nombre: string;
    primer_apellido: string;
    segundo_apellido: string;
    email: string;
    telefono: string;
    direccion: string;
    especialidad: string;
    idRol: number;
    fechaCreacion: Date;
    fechaModificacion: Date;
    fechaEliminacion: Date;
    rol: Rol;
}
