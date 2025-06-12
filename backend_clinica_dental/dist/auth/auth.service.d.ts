import { JwtService } from '@nestjs/jwt';
import { OdontologosService } from 'src/odontologos/odontologos.service';
import { AuthLoginDto } from './dto/auth-login.dto';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { Odontologo } from 'src/odontologos/entities/odontologo.entity';
import { Paciente } from 'src/pacientes/entities/paciente.entity';
import { PacientesService } from 'src/pacientes/pacientes.service';
export declare class AuthService {
    private readonly odontologoService;
    private readonly PacientesService;
    private readonly jwtService;
    constructor(odontologoService: OdontologosService, PacientesService: PacientesService, jwtService: JwtService);
    login(authLoginDto: AuthLoginDto): Promise<any>;
    verifyPayload(payload: JwtPayload): Promise<Odontologo | Paciente>;
    getAccessToken(payload: any): Promise<string>;
}
