import { CreateOdontologoDto } from './dto/create-odontologo.dto';
import { UpdateOdontologoDto } from './dto/update-odontologo.dto';
import { Repository } from 'typeorm';
import { Odontologo } from './entities/odontologo.entity';
export declare class OdontologosService {
    private odontologosRepository;
    constructor(odontologosRepository: Repository<Odontologo>);
    create(createOdontologoDto: CreateOdontologoDto): Promise<Odontologo>;
    findAll(): Promise<Odontologo[]>;
    findOne(id: number): Promise<Odontologo>;
    findAuthenticatedUser(id: number): Promise<Odontologo>;
    update(id: number, updateOdontologoDto: UpdateOdontologoDto): Promise<Odontologo>;
    remove(id: number): Promise<Odontologo>;
    validate(email: string, clave: string): Promise<Odontologo | null>;
    cambiarPassword(userId: number, passwordActual: string, nuevaPassword: string): Promise<string>;
}
