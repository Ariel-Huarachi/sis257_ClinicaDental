import { OdontologosServiciosService } from './odontologos_servicios.service';
import { CreateOdontologosServicioDto } from './dto/create-odontologos_servicio.dto';
import { UpdateOdontologosServicioDto } from './dto/update-odontologos_servicio.dto';
export declare class OdontologosServiciosController {
    private readonly odontologosServiciosService;
    constructor(odontologosServiciosService: OdontologosServiciosService);
    create(createOdontologosServicioDto: CreateOdontologosServicioDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateOdontologosServicioDto: UpdateOdontologosServicioDto): string;
    remove(id: string): string;
}
