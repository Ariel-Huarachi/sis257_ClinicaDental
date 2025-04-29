import { Cita } from 'src/citas/entities/cita.entity';
export declare class Pago {
    id: number;
    idCita: number;
    montoPagado: number;
    metodoPago: string;
    fechaPago: Date;
    fechaCreacion: Date;
    fechaModificacion: Date;
    fechaEliminacion: Date;
    cita: Cita;
}
