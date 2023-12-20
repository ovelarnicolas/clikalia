import { Injectable } from '@nestjs/common';
import IPGateway1 from './interfaces/pgateway_1.interface';
import { PayDto } from '../core/dto/pay.dto';
import { PGatewayType } from '../core/interfaces/pgateway-type.enum';

@Injectable()
export class Pgateway1Service implements IPGateway1 {
  async Pay(payDto: PayDto): Promise<string> {
    return `${payDto.name} payed with ${payDto.gateway} an amount of ${payDto.amount}`;
  }
  async Reimburse(gateway: PGatewayType): Promise<string> {
    return `Reimbursed with ${gateway}`;
  }
  async PartialReimburse(gateway: PGatewayType): Promise<string> {
    return `Partial Reimbursed with ${gateway}`;
  }
}
