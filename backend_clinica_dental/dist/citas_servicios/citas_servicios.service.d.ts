import { Repository } from 'typeorm';
import { CreateCitasServicioDto } from './dto/create-citas_servicio.dto';
import { UpdateCitasServicioDto } from './dto/update-citas_servicio.dto';
import { CitasServicio } from './entities/citas_servicio.entity';
import { Cita } from 'src/citas/entities/cita.entity';
import { Servicio } from 'src/servicios/entities/servicio.entity';
export declare class CitasServiciosService {
    private citasServiciosRepository;
    private citasRepository;
    private serviciosRepository;
    constructor(citasServiciosRepository: Repository<CitasServicio>, citasRepository: Repository<Cita>, serviciosRepository: Repository<Servicio>);
    create(createDto: CreateCitasServicioDto): Promise<CitasServicio>;
    findAll(): Promise<CitasServicio[]>;
    findOne(id: number): Promise<CitasServicio>;
    update(id: number, updateDto: UpdateCitasServicioDto): Promise<CitasServicio>;
    remove(id: number): Promise<CitasServicio>;
}
