import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { OdontologosService } from 'src/odontologos/odontologos.service';
import { AuthLoginDto } from './dto/auth-login.dto';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { Odontologo } from 'src/odontologos/entities/odontologo.entity';
import { Paciente } from 'src/pacientes/entities/paciente.entity';
import { PacientesService } from 'src/pacientes/pacientes.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly odontologoService: OdontologosService,
    private readonly PacientesService: PacientesService,
    private readonly jwtService: JwtService,
  ) {}

  async login(authLoginDto: AuthLoginDto): Promise<any> {
    const { email, clave } = authLoginDto;

    let user: any;

    // Primero, intenta autenticar como odontólogo
    console.log('Intentando autenticar como odontólogo...');
    user = await this.odontologoService.validate(email, clave);

    if (!user) {
      // Si no es odontólogo, intenta autenticar como paciente
      console.log('No es odontólogo, intentando autenticar como paciente...');
      user = await this.PacientesService.validate(email, clave);
    }

    if (!user) {
      console.error('Credenciales inválidas para ambos roles.');
      throw new UnauthorizedException('Credenciales inválidas');
    }

    // Genera el payload con el ID y el rol del usuario
    const payload = {
      sub: user.id,
      role: user.rol.id === 2 ? 'odontologo' : 'paciente', // Determina el rol basado en el ID del rol
    };

    console.log('Usuario autenticado:', payload);

    const access_token = await this.getAccessToken(payload);

    return {
      id: user.id,
      name: user.nombre, // Aquí usamos el atributo 'nombre' como 'name'
      email: user.email, // Si el email también es compartido
      rol: payload.role, // Devuelve 'odontologo' o 'cliente'
      access_token,
    };
    
  }

  async verifyPayload(payload: JwtPayload): Promise<Odontologo | Paciente> {
    let user: any;

    console.log('Verificando el payload:', payload);

    if (payload.role === 'odontologo') {
      user = await this.odontologoService.findOne(payload.sub);
    } else if (payload.role === 'paciente') {
      user = await this.PacientesService.findOne(payload.sub);
    } else {
      console.error(`Rol inválido: ${payload.role}`);
      throw new UnauthorizedException(`Rol inválido: ${payload.role}`);
    }

    if (!user) {
      console.error(`Usuario inválido con ID: ${payload.sub}`);
      throw new UnauthorizedException(`Usuario inválido: ${payload.sub}`);
    }

    return user;
  }

  async getAccessToken(payload): Promise<string> {
    try {
      const accessToken = await this.jwtService.sign(payload, {
        secret: process.env.JWT_TOKEN,
        expiresIn: process.env.JWT_TOKEN_EXPIRATION,
      });
      return accessToken;
    } catch (error) {
      console.error('Error al generar el token JWT:', error);
      throw new UnauthorizedException('Error al generar el token JWT');
    }
  }
}

