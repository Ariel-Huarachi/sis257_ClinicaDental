import { CitasServicio } from 'src/citas_servicios/entities/citas_servicio.entity';
import { Odontologo } from 'src/odontologos/entities/odontologo.entity';
import { Paciente } from 'src/pacientes/entities/paciente.entity';
import { Pago } from 'src/pagos/entities/pago.entity';
export declare class Cita {
    id: number;
    estado: string;
    idCliente: number;
    idOdontologo: number;
    fechaHoraInicio: Date;
    fechaHoraFin: Date;
    fechaCreacion: Date;
    fechaModificacion: Date;
    fechaEliminacion: Date;
    paciente: Paciente;
    odontologo: Odontologo;
    pagos: Pago[];
    citas_servicios: CitasServicio[];
}
