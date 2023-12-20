import { Injectable } from '@nestjs/common';
import IPGateway2 from './interfaces/pgateway_2.interface';
import { PayDto } from '../core/dto/pay.dto';
import { PGatewayType } from 'src/core/interfaces/pgateway-type.enum';

@Injectable()
export class Pgateway2Service implements IPGateway2 {
  async Pay(payDto: PayDto): Promise<string> {
    return `${payDto.name} payed with ${payDto.gateway} an amount of ${payDto.amount}`;
  }
  async Reimburse(gateway: PGatewayType): Promise<string> {
    return `Reimbursed with ${gateway}`;
  }
}
