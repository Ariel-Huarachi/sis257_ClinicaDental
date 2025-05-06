import { OdontologosServiciosService } from './odontologos_servicios.service';
import { CreateOdontologosServicioDto } from './dto/create-odontologos_servicio.dto';
import { UpdateOdontologosServicioDto } from './dto/update-odontologos_servicio.dto';
export declare class OdontologosServiciosController {
    private readonly odontologosServiciosService;
    constructor(odontologosServiciosService: OdontologosServiciosService);
    create(createOdontologosServicioDto: CreateOdontologosServicioDto): Promise<import("./entities/odontologos_servicio.entity").OdontologosServicio>;
    findAll(): Promise<import("./entities/odontologos_servicio.entity").OdontologosServicio[]>;
    findOne(id: string): Promise<import("./entities/odontologos_servicio.entity").OdontologosServicio>;
    update(id: string, updateOdontologosServicioDto: UpdateOdontologosServicioDto): Promise<import("./entities/odontologos_servicio.entity").OdontologosServicio>;
    remove(id: string): Promise<void>;
}
