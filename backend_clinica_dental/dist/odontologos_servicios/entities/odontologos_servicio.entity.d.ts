import { Odontologo } from 'src/odontologos/entities/odontologo.entity';
import { Servicio } from 'src/servicios/entities/servicio.entity';
export declare class OdontologosServicio {
    id: number;
    idOdontologo: number;
    idServicio: number;
    fechaCreacion: Date;
    fechaModificacion: Date;
    fechaEliminacion: Date;
    odontologo: Odontologo;
    servicio: Servicio;
}
