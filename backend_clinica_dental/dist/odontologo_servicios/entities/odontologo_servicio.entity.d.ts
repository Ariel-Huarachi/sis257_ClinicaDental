import { Servicio } from 'src/servicios/entities/servicio.entity';
import { Odontologo } from '../../odontologos/entities/odontologo.entity';
export declare class OdontologoServicio {
    id: number;
    odontologoId: number;
    servicioId: number;
    fechaCreacion: Date;
    fechaModificacion: Date;
    fechaEliminacion: Date;
    odontologo: Odontologo;
    servicio: Servicio;
}
