import { Odontologo } from 'src/odontologos/entities/odontologo.entity';
export declare class Horario {
    id: number;
    idOdontologo: number;
    fecha: Date;
    hora: string;
    estado: string;
    fechaCreacion: Date;
    fechaModificacion: Date;
    fechaEliminacion: Date;
    odontologo: Odontologo;
}
