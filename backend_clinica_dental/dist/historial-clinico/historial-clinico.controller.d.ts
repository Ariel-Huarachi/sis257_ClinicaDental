import { HistorialClinicoService } from './historial-clinico.service';
import { CreateHistorialClinicoDto } from './dto/create-historial-clinico.dto';
import { UpdateHistorialClinicoDto } from './dto/update-historial-clinico.dto';
export declare class HistorialClinicoController {
    private readonly historialClinicoService;
    constructor(historialClinicoService: HistorialClinicoService);
    create(createHistorialClinicoDto: CreateHistorialClinicoDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateHistorialClinicoDto: UpdateHistorialClinicoDto): string;
    remove(id: string): string;
}
