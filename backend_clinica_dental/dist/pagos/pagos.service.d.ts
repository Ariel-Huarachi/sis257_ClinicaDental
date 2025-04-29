import { CreatePagoDto } from './dto/create-pago.dto';
import { UpdatePagoDto } from './dto/update-pago.dto';
export declare class PagosService {
    create(createPagoDto: CreatePagoDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updatePagoDto: UpdatePagoDto): string;
    remove(id: number): string;
}
