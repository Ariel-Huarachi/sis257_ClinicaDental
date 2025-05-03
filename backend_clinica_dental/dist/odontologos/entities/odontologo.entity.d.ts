import { Cita } from 'src/citas/entities/cita.entity';
import { Horario } from 'src/horarios/entities/horario.entity';
import { OdontologosServicio } from 'src/odontologos_servicios/entities/odontologos_servicio.entity';
import { Rol } from 'src/roles/entities/rol.entity';
export declare class Odontologo {
    id: number;
    nombre: string;
    primer_apellido: string;
    segundo_apellido: string;
    email: string;
    password: string;
    telefono: string;
    direccion: string;
    especialidad: string;
    idRol: number;
    fechaCreacion: Date;
    fechaModificacion: Date;
    fechaEliminacion: Date;
    hashPassword(): Promise<void>;
    validatePassword(plainPassword: string): Promise<boolean>;
    rol: Rol;
    horarios: Horario[];
    citas: Cita[];
    odontologosServicios: OdontologosServicio[];
}
