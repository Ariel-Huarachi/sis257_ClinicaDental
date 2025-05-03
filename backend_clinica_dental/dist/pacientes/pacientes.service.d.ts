import { CreatePacienteDto } from './dto/create-paciente.dto';
import { UpdatePacienteDto } from './dto/update-paciente.dto';
import { Paciente } from './entities/paciente.entity';
import { Repository } from 'typeorm';
export declare class PacientesService {
    private pacienteRepository;
    constructor(pacienteRepository: Repository<Paciente>);
    create(createPacienteDto: CreatePacienteDto): Promise<Paciente>;
    findAll(): Promise<Paciente[]>;
    findOne(id: number): Promise<Paciente>;
    findAuthenticatedUser(id: number): Promise<Paciente>;
    update(id: number, updatePacienteDto: UpdatePacienteDto): Promise<Paciente>;
    remove(id: number): Promise<Paciente>;
    validate(email: string, clave: string): Promise<Paciente | null>;
    cambiarPassword(userId: number, passwordActual: string, nuevaPassword: string): Promise<string>;
}
