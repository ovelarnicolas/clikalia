import { Pgateway1Service } from '../../pgateway_1/pgateway_1.service';
import { Pgateway2Service } from '../../pgateway_2/pgateway_2.service';
import { PGatewayType } from '../interfaces/pgateway-type.enum';

export function getServiceByGatewayType(
  gatewayType: PGatewayType,
): Pgateway1Service | Pgateway2Service {
  switch (gatewayType) {
    case PGatewayType.GATEWAY_1:
      return new Pgateway1Service();
    case PGatewayType.GATEWAY_2:
      return new Pgateway2Service();
    default:
      throw new Error('Invalid gateway type');
  }
}
