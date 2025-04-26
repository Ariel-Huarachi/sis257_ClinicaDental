import { OdontologosService } from './odontologos.service';
import { CreateOdontologoDto } from './dto/create-odontologo.dto';
import { UpdateOdontologoDto } from './dto/update-odontologo.dto';
export declare class OdontologosController {
    private readonly odontologosService;
    constructor(odontologosService: OdontologosService);
    create(createOdontologoDto: CreateOdontologoDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateOdontologoDto: UpdateOdontologoDto): string;
    remove(id: string): string;
}
