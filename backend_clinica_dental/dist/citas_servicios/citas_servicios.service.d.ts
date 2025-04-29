import { CreateCitasServicioDto } from './dto/create-citas_servicio.dto';
import { UpdateCitasServicioDto } from './dto/update-citas_servicio.dto';
export declare class CitasServiciosService {
    create(createCitasServicioDto: CreateCitasServicioDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateCitasServicioDto: UpdateCitasServicioDto): string;
    remove(id: number): string;
}
