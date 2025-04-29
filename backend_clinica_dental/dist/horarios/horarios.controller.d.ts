import { HorariosService } from './horarios.service';
import { CreateHorarioDto } from './dto/create-horario.dto';
import { UpdateHorarioDto } from './dto/update-horario.dto';
export declare class HorariosController {
    private readonly horariosService;
    constructor(horariosService: HorariosService);
    create(createHorarioDto: CreateHorarioDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateHorarioDto: UpdateHorarioDto): string;
    remove(id: string): string;
}
