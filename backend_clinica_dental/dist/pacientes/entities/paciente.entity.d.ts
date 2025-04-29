import { Cita } from 'src/citas/entities/cita.entity';
import { HistorialClinico } from 'src/historial-clinico/entities/historial-clinico.entity';
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
    citas: Cita[];
    historialClinico: HistorialClinico[];
}
