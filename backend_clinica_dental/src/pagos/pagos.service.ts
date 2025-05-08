import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pago } from './entities/pago.entity';
import { CreatePagoDto } from './dto/create-pago.dto';
import { UpdatePagoDto } from './dto/update-pago.dto';
import { Cita } from 'src/citas/entities/cita.entity';

@Injectable()
export class PagosService {
  constructor(
    @InjectRepository(Pago)
    private readonly pagoRepository: Repository<Pago>,

    @InjectRepository(Cita)
    private readonly citaRepository: Repository<Cita>,
  ) {}

  async create(createPagoDto: CreatePagoDto): Promise<Pago> {
    const { idCita, montoPagado, metodoPago, fechaPago } = createPagoDto;

    // Verificar si la cita existe
    const cita = await this.citaRepository.findOneBy({ id: idCita });
    if (!cita) {
      throw new NotFoundException(`Cita con ID ${idCita} no encontrada`);
    }

    // Validar método de pago permitido
    const metodosPermitidos = ['Efectivo', 'Tarjeta', 'QR'];
    if (!metodosPermitidos.includes(metodoPago)) {
      throw new BadRequestException(
        `Método de pago no válido. Métodos permitidos: ${metodosPermitidos.join(', ')}`,
      );
    }

    const nuevoPago = this.pagoRepository.create({
      idCita,
      montoPagado,
      metodoPago,
      fechaPago: new Date(fechaPago),
    });

    return this.pagoRepository.save(nuevoPago);
  }

  async findAll(): Promise<Pago[]> {
    return this.pagoRepository.find({
      relations: ['cita'],
    });
  }

  async findOne(id: number): Promise<Pago> {
    const pago = await this.pagoRepository.findOne({
      where: { id },
      relations: ['cita'],
    });

    if (!pago) {
      throw new NotFoundException(`Pago con ID ${id} no encontrado`);
    }

    return pago;
  }

  async update(id: number, updatePagoDto: UpdatePagoDto): Promise<Pago> {
    const pagoExistente = await this.findOne(id);

    const { idCita, montoPagado, metodoPago, fechaPago } = updatePagoDto;

    if (idCita && idCita !== pagoExistente.idCita) {
      const cita = await this.citaRepository.findOneBy({ id: idCita });
      if (!cita) {
        throw new NotFoundException(`Cita con ID ${idCita} no encontrada`);
      }
    }

    if (metodoPago) {
      const metodosPermitidos = ['Efectivo', 'Tarjeta', 'QR'];
      if (!metodosPermitidos.includes(metodoPago)) {
        throw new BadRequestException(
          `Método de pago no válido. Métodos permitidos: ${metodosPermitidos.join(', ')}`,
        );
      }
    }

    const pagoActualizado = this.pagoRepository.merge(pagoExistente, {
      idCita,
      montoPagado,
      metodoPago,
      fechaPago: fechaPago ? new Date(fechaPago) : undefined,
    });

    return this.pagoRepository.save(pagoActualizado);
  }

  async remove(id: number): Promise<Pago> {
    const pago = await this.findOne(id);
    return this.pagoRepository.softRemove(pago);
  }
}
