import { CreateHorarioDto } from './dto/create-horario.dto';
import { UpdateHorarioDto } from './dto/update-horario.dto';
import { Repository } from 'typeorm';
import { Horario } from './entities/horario.entity';
export declare class HorariosService {
    private horarioRepository;
    constructor(horarioRepository: Repository<Horario>);
    create(createHorarioDto: CreateHorarioDto): Promise<Horario>;
    findAll(): Promise<Horario[]>;
    findOne(id: number): Promise<Horario>;
    update(id: number, updateHorarioDto: UpdateHorarioDto): Promise<Horario>;
    remove(id: number): Promise<Horario>;
}
