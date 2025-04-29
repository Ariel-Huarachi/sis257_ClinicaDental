import { CreateOdontologosServicioDto } from './dto/create-odontologos_servicio.dto';
import { UpdateOdontologosServicioDto } from './dto/update-odontologos_servicio.dto';
export declare class OdontologosServiciosService {
    create(createOdontologosServicioDto: CreateOdontologosServicioDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateOdontologosServicioDto: UpdateOdontologosServicioDto): string;
    remove(id: number): string;
}
