import { Paciente } from 'src/pacientes/entities/paciente.entity';
export declare class HistorialClinico {
    id: number;
    idCliente: number;
    diagnostico: string;
    tratamientoRealizado: string;
    observaciones: string;
    fechaTratamiento: Date;
    fechaCreacion: Date;
    fechaModificacion: Date;
    fechaEliminacion: Date;
    paciente: Paciente;
}
