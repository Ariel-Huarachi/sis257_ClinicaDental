import { CitasServicio } from 'src/citas_servicios/entities/citas_servicio.entity';
import { OdontologosServicio } from 'src/odontologos_servicios/entities/odontologos_servicio.entity';
export declare class Servicio {
    id: number;
    nombre: string;
    descripcion: string;
    precio: number;
    duracion: number;
    fechaCreacion: Date;
    fechaModificacion: Date;
    fechaEliminacion: Date;
    odontologosServicios: OdontologosServicio[];
    citas_servicios: CitasServicio[];
}
