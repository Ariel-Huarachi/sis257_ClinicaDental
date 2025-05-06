import { HorariosService } from './horarios.service';
import { CreateHorarioDto } from './dto/create-horario.dto';
import { UpdateHorarioDto } from './dto/update-horario.dto';
export declare class HorariosController {
    private readonly horariosService;
    constructor(horariosService: HorariosService);
    create(createHorarioDto: CreateHorarioDto): Promise<import("./entities/horario.entity").Horario>;
    findAll(): Promise<import("./entities/horario.entity").Horario[]>;
    findOne(id: string): Promise<import("./entities/horario.entity").Horario>;
    update(id: string, updateHorarioDto: UpdateHorarioDto): Promise<import("./entities/horario.entity").Horario>;
    remove(id: string): Promise<import("./entities/horario.entity").Horario>;
}
