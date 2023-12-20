import { PayDto } from '../dto/pay.dto';
import { PGatewayType } from './pgateway-type.enum';

export default interface IPGatewayBase {
  Pay(payDto: PayDto): Promise<string>;
  Reimburse(gateway: PGatewayType): Promise<string>;
}
