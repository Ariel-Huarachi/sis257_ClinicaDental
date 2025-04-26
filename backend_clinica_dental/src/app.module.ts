import { Module } from '@nestjs/common';
import { AppController } from './app.controller'; // importa el controlador y servicio principal de la aplicación
import { AppService } from './app.service'; // importa el controlador y servicio principal de la aplicación
import { ConfigModule } from '@nestjs/config'; // importa el módulo de configuración de NestJS
import { TypeOrmModule } from '@nestjs/typeorm'; // importa el módulo de TypeORM para la conexión a la base de datos
import { RolesModule } from './roles/roles.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      //vamos a crear en variables de entorno en .env
      type: 'postgres', // tipo de base de datos
      host: process.env.DB_HOST, // host de la base de datos
      port: Number(process.env.DB_PORT), // puerto de la base de datos
      username: process.env.DB_USERNAME, // usuario de la base de datos
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME, // nombre de la base de datos
      //entities: [__dirname + '/**/*.entity{.ts,.js}'], // entidades de la base de datos
      entities: [__dirname + '*/**/entities/*.{ts|js}'], // entidades de la base de datos
      synchronize: true,
      autoLoadEntities: true, // solo se pone true cuando esta en desarrollo
    }),
    RolesModule,
  ], // módulo de configuración para cargar variables de entorno
  controllers: [AppController], // controlador principal de la aplicación
  providers: [AppService], // servicio principal de la aplicación
})
export class AppModule {}
