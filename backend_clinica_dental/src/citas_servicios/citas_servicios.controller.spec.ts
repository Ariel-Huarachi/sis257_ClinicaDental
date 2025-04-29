import { Test, TestingModule } from '@nestjs/testing';
import { CitasServiciosController } from './citas_servicios.controller';
import { CitasServiciosService } from './citas_servicios.service';

describe('CitasServiciosController', () => {
  let controller: CitasServiciosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CitasServiciosController],
      providers: [CitasServiciosService],
    }).compile();

    controller = module.get<CitasServiciosController>(CitasServiciosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
