import { CreateCitaDto } from './dto/create-cita.dto';
import { UpdateCitaDto } from './dto/update-cita.dto';
import { Repository } from 'typeorm';
import { Cita } from './entities/cita.entity';
import { Paciente } from 'src/pacientes/entities/paciente.entity';
import { Odontologo } from 'src/odontologos/entities/odontologo.entity';
export declare class CitasService {
    private citasRepository;
    private pacienteRepository;
    private odontologosRepository;
    constructor(citasRepository: Repository<Cita>, pacienteRepository: Repository<Paciente>, odontologosRepository: Repository<Odontologo>);
    create(createCitaDto: CreateCitaDto): Promise<Cita>;
    findAll(): Promise<Cita[]>;
    findOne(id: number): Promise<Cita>;
    update(id: number, updateCitaDto: UpdateCitaDto): Promise<Cita>;
    remove(id: number): Promise<Cita>;
    private validarHorarioPermitido;
}
