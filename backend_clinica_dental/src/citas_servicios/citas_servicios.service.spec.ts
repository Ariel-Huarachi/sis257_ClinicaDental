import { Test, TestingModule } from '@nestjs/testing';
import { CitasServiciosService } from './citas_servicios.service';

describe('CitasServiciosService', () => {
  let service: CitasServiciosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CitasServiciosService],
    }).compile();

    service = module.get<CitasServiciosService>(CitasServiciosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
