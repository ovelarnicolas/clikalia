import { Test, TestingModule } from '@nestjs/testing';
import { Pgateway2Service } from './pgateway_2.service';
import { PGatewayType } from '../core/interfaces/pgateway-type.enum';
import { Currency } from '../core/interfaces/currency.enum';

describe('pgateway_2.service', () => {
  let service: Pgateway2Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Pgateway2Service],
    }).compile();

    service = module.get<Pgateway2Service>(Pgateway2Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return a string', async () => {
    const result = await service.Pay({
      name: 'test',
      gateway: PGatewayType.GATEWAY_1,
      amount: 100,
      cardNumber: '1234567891011',
      cvv: '000',
      expirationDate: '01/30',
      currency: Currency.USD,
    });
    expect(typeof result).toBe('string');
  });
});
