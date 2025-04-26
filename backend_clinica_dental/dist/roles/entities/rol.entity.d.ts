import { Odontologo } from 'src/odontologos/entities/odontologo.entity';
import { Paciente } from 'src/pacientes/entities/paciente.entity';
export declare class Rol {
    id: number;
    nombre_rol: string;
    fechaCreacion: Date;
    fechaModificacion: Date;
    fechaEliminacion: Date;
    odontologos: Odontologo[];
    pacientes: Paciente[];
}
