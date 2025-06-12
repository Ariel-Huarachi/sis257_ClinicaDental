import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { ConfigModule } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategies/jwt.strategy';
import { OdontologosModule } from 'src/odontologos/odontologos.module';
import { PacientesModule } from 'src/pacientes/pacientes.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    OdontologosModule,
    PacientesModule,
    PassportModule.register({}),
    JwtModule.register({}),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}


