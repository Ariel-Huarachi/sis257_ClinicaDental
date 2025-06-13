import { OdontologosServiciosService } from './odontologos_servicios.service';
import { CreateOdontologoServicioDto } from './dto/create-odontologo_servicio.dto';
import { UpdateOdontologoServicioDto } from './dto/update-odontologo_servicio.dto';
import { OdontologoServicio } from './entities/odontologo_servicio.entity';
export declare class OdontologosServiciosController {
    private readonly odontologoServiciosService;
    constructor(odontologoServiciosService: OdontologosServiciosService);
    create(createOdontologoServicioDto: CreateOdontologoServicioDto): Promise<OdontologoServicio>;
    findAll(): Promise<OdontologoServicio[]>;
    findMisServicios(req: any): Promise<any>;
    findServiciosDisponibles(req: any): Promise<any>;
    findOne(id: string): Promise<OdontologoServicio>;
    update(id: string, updateOdontologoServicioDto: UpdateOdontologoServicioDto): Promise<OdontologoServicio>;
    remove(id: string): Promise<OdontologoServicio>;
    eliminarRelacion(odontologoId: number, servicioId: number): Promise<{
        message: string;
    }>;
}
