import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module'; // importa el módulo principal de la aplicación
// import { NestExpressApplication } from '@nestjs/platform-express'; // importa la clase NestExpressApplication de NestJS
import { ValidationPipe } from '@nestjs/common'; // importa el pipe de validación de NestJS

async function bootstrap() {
  const app = await NestFactory.create(AppModule); // llama al módulo principal de la aplicación
  // esto se agrego para la parte de validaciones
  app.useGlobalPipes(new ValidationPipe()); // usa el pipe de validación global para validar los datos de entrada
  //____________________________________________
  await app.listen(process.env.PORT ?? 3000); // inicia el servidor en el puerto especificado en las variables de entorno o en el puerto 3000 por defecto
  //console.log(`App Corriendo ${process.env.PORT ?? 3000}`); // imprime en consola el puerto en el que se está ejecutando el servidor
  //console.log(`App Corriendo en http://localhost:${process.env.PORT ?? 3000}`); // imprime en consola el puerto en el que se está ejecutando el servidor
  console.log(`App Corriendo ${await app.getUrl()}`); // imprime en consola la url en la que se está ejecutando el servidor
}
bootstrap();
