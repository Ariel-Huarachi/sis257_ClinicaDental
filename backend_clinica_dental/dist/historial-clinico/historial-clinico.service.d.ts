import { CreateHistorialClinicoDto } from './dto/create-historial-clinico.dto';
import { UpdateHistorialClinicoDto } from './dto/update-historial-clinico.dto';
export declare class HistorialClinicoService {
    create(createHistorialClinicoDto: CreateHistorialClinicoDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateHistorialClinicoDto: UpdateHistorialClinicoDto): string;
    remove(id: number): string;
}
