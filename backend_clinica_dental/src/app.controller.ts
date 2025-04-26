import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get() // existe un metodo GET en la ruta raíz que se llama getHello
  getHello(): string {
    return this.appService.getHello(); // llama al método getHello del servicio
  }
}
