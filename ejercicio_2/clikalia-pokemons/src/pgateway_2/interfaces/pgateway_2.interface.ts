import { PGatewayType } from '../../core/interfaces/pgateway-type.enum';
import { PayDto } from '../../core/dto/pay.dto';
import IPGatewayBase from '../../core/interfaces/pgateway-base.interface';

export default interface IPGateway2 extends IPGatewayBase {
  Pay(payDto: PayDto): Promise<string>;
  Reimburse(gateway: PGatewayType): Promise<string>;
}
