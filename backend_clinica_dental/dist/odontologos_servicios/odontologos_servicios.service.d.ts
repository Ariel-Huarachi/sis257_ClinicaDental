import { Repository } from 'typeorm';
import { OdontologosServicio } from './entities/odontologos_servicio.entity';
import { CreateOdontologosServicioDto } from './dto/create-odontologos_servicio.dto';
import { UpdateOdontologosServicioDto } from './dto/update-odontologos_servicio.dto';
export declare class OdontologosServiciosService {
    private readonly odontologosServicioRepository;
    constructor(odontologosServicioRepository: Repository<OdontologosServicio>);
    create(createOdontologosServicioDto: CreateOdontologosServicioDto): Promise<OdontologosServicio>;
    findAll(): Promise<OdontologosServicio[]>;
    findOne(id: number): Promise<OdontologosServicio>;
    update(id: number, updateOdontologosServicioDto: UpdateOdontologosServicioDto): Promise<OdontologosServicio>;
    remove(id: number): Promise<void>;
}
