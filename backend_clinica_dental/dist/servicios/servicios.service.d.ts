import { CreateServicioDto } from './dto/create-servicio.dto';
import { UpdateServicioDto } from './dto/update-servicio.dto';
import { Repository } from 'typeorm';
import { Servicio } from './entities/servicio.entity';
export declare class ServiciosService {
    private serviciosRepository;
    constructor(serviciosRepository: Repository<Servicio>);
    create(createServicioDto: CreateServicioDto): Promise<Servicio>;
    findAll(): Promise<Servicio[]>;
    findOne(id: number): Promise<Servicio>;
    update(id: number, updateServicioDto: UpdateServicioDto): Promise<Servicio>;
    remove(id: number): Promise<Servicio>;
}
