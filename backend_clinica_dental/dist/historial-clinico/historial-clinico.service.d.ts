import { Repository } from 'typeorm';
import { HistorialClinico } from './entities/historial-clinico.entity';
import { CreateHistorialClinicoDto } from './dto/create-historial-clinico.dto';
import { UpdateHistorialClinicoDto } from './dto/update-historial-clinico.dto';
import { Paciente } from 'src/pacientes/entities/paciente.entity';
export declare class HistorialClinicoService {
    private historialClinicoRepository;
    private pacientesRepository;
    constructor(historialClinicoRepository: Repository<HistorialClinico>, pacientesRepository: Repository<Paciente>);
    create(createHistorialClinicoDto: CreateHistorialClinicoDto): Promise<HistorialClinico>;
    findAll(): Promise<HistorialClinico[]>;
    findOne(id: number): Promise<HistorialClinico>;
    update(id: number, updateHistorialClinicoDto: UpdateHistorialClinicoDto): Promise<HistorialClinico>;
    remove(id: number): Promise<HistorialClinico>;
}
