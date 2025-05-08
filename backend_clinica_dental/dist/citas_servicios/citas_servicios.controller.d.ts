import { CitasServiciosService } from './citas_servicios.service';
import { CreateCitasServicioDto } from './dto/create-citas_servicio.dto';
import { UpdateCitasServicioDto } from './dto/update-citas_servicio.dto';
export declare class CitasServiciosController {
    private readonly citasServiciosService;
    constructor(citasServiciosService: CitasServiciosService);
    create(createCitasServicioDto: CreateCitasServicioDto): Promise<import("./entities/citas_servicio.entity").CitasServicio>;
    findAll(): Promise<import("./entities/citas_servicio.entity").CitasServicio[]>;
    findOne(id: string): Promise<import("./entities/citas_servicio.entity").CitasServicio>;
    update(id: string, updateCitasServicioDto: UpdateCitasServicioDto): Promise<import("./entities/citas_servicio.entity").CitasServicio>;
    remove(id: string): Promise<import("./entities/citas_servicio.entity").CitasServicio>;
}
