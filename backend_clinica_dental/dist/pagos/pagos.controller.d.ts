import { PagosService } from './pagos.service';
import { CreatePagoDto } from './dto/create-pago.dto';
import { UpdatePagoDto } from './dto/update-pago.dto';
export declare class PagosController {
    private readonly pagosService;
    constructor(pagosService: PagosService);
    create(createPagoDto: CreatePagoDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updatePagoDto: UpdatePagoDto): string;
    remove(id: string): string;
}
