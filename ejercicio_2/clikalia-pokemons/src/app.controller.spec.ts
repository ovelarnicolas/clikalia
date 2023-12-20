import { AppController } from './app.controller';
import { PayDto } from './core/dto/pay.dto';
import { Currency } from './core/interfaces/currency.enum';
import { PGatewayType } from './core/interfaces/pgateway-type.enum';
import { Pgateway1Service } from './pgateway_1/pgateway_1.service';

describe('AppController', () => {
  let controller: AppController;
  let service: Pgateway1Service;

  beforeEach(() => {
    service = new Pgateway1Service();
    controller = new AppController();
  });

  describe('Pay Gateway_1', () => {
    it('should return an string with message', async () => {
      const result = 'test payed with pgateway_1 an amount of 100';
      const PayDto = {
        name: 'test',
        gateway: PGatewayType.GATEWAY_1,
        amount: 100,
        cardNumber: '1234567891011',
        cvv: '000',
        expirationDate: '01/30',
        currency: Currency.EUR,
      };

      jest
        .spyOn(service, 'Pay')
        .mockImplementation(() => Promise.resolve(result));

      expect(await controller.payGateway1(PayDto)).toBe(result);
    });
  });
});
