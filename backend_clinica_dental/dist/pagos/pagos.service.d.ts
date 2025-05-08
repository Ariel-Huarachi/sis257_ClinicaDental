import { Repository } from 'typeorm';
import { Pago } from './entities/pago.entity';
import { CreatePagoDto } from './dto/create-pago.dto';
import { UpdatePagoDto } from './dto/update-pago.dto';
import { Cita } from 'src/citas/entities/cita.entity';
export declare class PagosService {
    private readonly pagoRepository;
    private readonly citaRepository;
    constructor(pagoRepository: Repository<Pago>, citaRepository: Repository<Cita>);
    create(createPagoDto: CreatePagoDto): Promise<Pago>;
    findAll(): Promise<Pago[]>;
    findOne(id: number): Promise<Pago>;
    update(id: number, updatePagoDto: UpdatePagoDto): Promise<Pago>;
    remove(id: number): Promise<Pago>;
}
