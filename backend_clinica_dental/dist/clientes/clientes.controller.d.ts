import { ClientesService } from './clientes.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
export declare class ClientesController {
    private readonly clientesService;
    constructor(clientesService: ClientesService);
    findAuthenticatedUser(req: any): Promise<import("./entities/cliente.entity").Cliente>;
    cambiarPassword(req: any, body: {
        passwordActual: string;
        nuevaPassword: string;
    }): Promise<string>;
    create(createClienteDto: CreateClienteDto): Promise<import("./entities/cliente.entity").Cliente>;
    findAll(): Promise<import("./entities/cliente.entity").Cliente[]>;
    findOne(id: string): Promise<import("./entities/cliente.entity").Cliente>;
    update(id: string, updateClienteDto: UpdateClienteDto): Promise<import("./entities/cliente.entity").Cliente>;
    remove(id: string): Promise<import("./entities/cliente.entity").Cliente>;
}
