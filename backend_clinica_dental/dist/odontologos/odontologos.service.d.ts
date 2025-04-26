import { CreateOdontologoDto } from './dto/create-odontologo.dto';
import { UpdateOdontologoDto } from './dto/update-odontologo.dto';
export declare class OdontologosService {
    create(createOdontologoDto: CreateOdontologoDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateOdontologoDto: UpdateOdontologoDto): string;
    remove(id: number): string;
}
