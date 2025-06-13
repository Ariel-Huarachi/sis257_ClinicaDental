import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { Cliente } from './entities/cliente.entity';
import { Repository } from 'typeorm';
export declare class ClientesService {
    private clientesRepository;
    constructor(clientesRepository: Repository<Cliente>);
    create(createClienteDto: CreateClienteDto): Promise<Cliente>;
    findAll(): Promise<Cliente[]>;
    findOne(id: number): Promise<Cliente>;
    findAuthenticatedUser(id: number): Promise<Cliente>;
    update(id: number, updateClienteDto: UpdateClienteDto): Promise<Cliente>;
    remove(id: number): Promise<Cliente>;
    validate(email: string, clave: string): Promise<Cliente | null>;
    cambiarPassword(userId: number, passwordActual: string, nuevaPassword: string): Promise<string>;
}
