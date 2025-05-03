import { OdontologosService } from './odontologos.service';
import { CreateOdontologoDto } from './dto/create-odontologo.dto';
import { UpdateOdontologoDto } from './dto/update-odontologo.dto';
export declare class OdontologosController {
    private readonly odontologosService;
    constructor(odontologosService: OdontologosService);
    create(createOdontologoDto: CreateOdontologoDto): Promise<import("./entities/odontologo.entity").Odontologo>;
    findAll(): Promise<import("./entities/odontologo.entity").Odontologo[]>;
    findOne(id: string): Promise<import("./entities/odontologo.entity").Odontologo>;
    update(id: string, updateOdontologoDto: UpdateOdontologoDto): Promise<import("./entities/odontologo.entity").Odontologo>;
    remove(id: string): Promise<import("./entities/odontologo.entity").Odontologo>;
}
