import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);


  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix('api');
  app.enableVersioning({ type: VersioningType.URI, defaultVersion: '1' });
  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('API Rest - SIS257')
    .setDescription('API Rest de la materia Desarrollo de Aplicación Int/Internet II')
    .setVersion('1.0')
    .addTag('Clinica-Dental') //se añade una etiqueta a la documentación
    .addBearerAuth({ type: 'http', scheme: 'bearer', bearerFormat: 'JWT', in: 'header' })
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('apidoc', app, documentFactory);
 
  await app.listen(process.env.PORT ?? '');
  console.log(`App corriendo en ${await app.getUrl()}/apidoc`);

}
bootstrap();
