import { CreateOdontologoServicioDto } from './dto/create-odontologo_servicio.dto';
import { UpdateOdontologoServicioDto } from './dto/update-odontologo_servicio.dto';
import { OdontologoServicio } from './entities/odontologo_servicio.entity';
import { Repository } from 'typeorm';
import { Odontologo } from 'src/odontologos/entities/odontologo.entity';
import { Servicio } from 'src/servicios/entities/servicio.entity';
export declare class OdontologosServiciosService {
    private odontologoServicioRepository;
    private odontologoRepository;
    private servicioRepository;
    constructor(odontologoServicioRepository: Repository<OdontologoServicio>, odontologoRepository: Repository<Odontologo>, servicioRepository: Repository<Servicio>);
    create(createOdontologoServicioDto: CreateOdontologoServicioDto): Promise<OdontologoServicio>;
    findAll(): Promise<OdontologoServicio[]>;
    findOne(id: number): Promise<OdontologoServicio>;
    update(id: number, updateOdontologoServicioDto: UpdateOdontologoServicioDto): Promise<OdontologoServicio>;
    remove(id: number): Promise<OdontologoServicio>;
    eliminarRelacion(odontologoId: number, servicioId: number): Promise<boolean>;
    findByOdontologoId(odontologoId: number): Promise<any>;
    findServiciosDisponibles(odontologoId: number): Promise<any>;
}
