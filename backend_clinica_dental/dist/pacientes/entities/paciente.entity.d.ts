import { Cita } from 'src/citas/entities/cita.entity';
import { HistorialClinico } from 'src/historial-clinico/entities/historial-clinico.entity';
import { Rol } from 'src/roles/entities/rol.entity';
export declare class Paciente {
    id: number;
    nombre: string;
    primerApellido: string;
    segundoApellido: string;
    email: string;
    password: string;
    telefono: string;
    direccion: string;
    idRol: number;
    fechaCreacion: Date;
    fechaModificacion: Date;
    fechaEliminacion: Date;
    hashPassword(): Promise<void>;
    validatePassword(plainPassword: string): Promise<boolean>;
    rol: Rol;
    citas: Cita[];
    historialClinico: HistorialClinico[];
}
