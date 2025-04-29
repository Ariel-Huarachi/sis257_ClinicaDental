import { Cita } from 'src/citas/entities/cita.entity';
import { Servicio } from 'src/servicios/entities/servicio.entity';
export declare class CitasServicio {
    id: number;
    idCita: number;
    idServicio: number;
    precioServicio: number;
    fechaCreacion: Date;
    fechaModificacion: Date;
    fechaEliminacion: Date;
    cita: Cita;
    servicio: Servicio;
}
