import { CitasServiciosService } from './citas_servicios.service';
import { CreateCitasServicioDto } from './dto/create-citas_servicio.dto';
import { UpdateCitasServicioDto } from './dto/update-citas_servicio.dto';
export declare class CitasServiciosController {
    private readonly citasServiciosService;
    constructor(citasServiciosService: CitasServiciosService);
    create(createCitasServicioDto: CreateCitasServicioDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateCitasServicioDto: UpdateCitasServicioDto): string;
    remove(id: string): string;
}
