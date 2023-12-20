import {
  Body,
  Controller,
  Get,
  Param,
  ParseEnumPipe,
  Post,
} from '@nestjs/common';
import { getServiceByGatewayType } from './core/utils/pgateway.factory';
import { PGatewayType } from './core/interfaces/pgateway-type.enum';
import { Pgateway1Service } from './pgateway_1/pgateway_1.service';
import { PayDto } from './core/dto/pay.dto';
import { ApiTags } from '@nestjs/swagger';
import { ApiOperation } from '@nestjs/swagger';
import { error } from 'console';

@Controller('api')
@ApiTags('clikalia')
export class AppController {
  // This controller was injecting the services PGatewayService1 y PGatewayService2 directly, now it uses the factory
  @Post('pay')
  @ApiOperation({ summary: 'Pay by PGateway specified' })
  payGateway1(@Body() payDto: PayDto): Promise<string> {
    const service = getServiceByGatewayType(payDto.gateway);
    return Promise.resolve(service.Pay(payDto));
  }

  @Get('reimburse/:gateway')
  reimburse(
    @Param('gateway', new ParseEnumPipe(PGatewayType)) gateway: PGatewayType,
  ): Promise<string> {
    const service = getServiceByGatewayType(gateway);
    return Promise.resolve(service.Reimburse(gateway));
  }

  @Get('partial-reimburse/:gateway')
  partialReimburse(
    @Param('gateway', new ParseEnumPipe(PGatewayType)) gateway: PGatewayType,
  ): Promise<string> {
    const service = getServiceByGatewayType(
      PGatewayType.GATEWAY_1,
    ) as Pgateway1Service;
    if (gateway === PGatewayType.GATEWAY_2) {
      // This is business logic and should be in the service
      throw error(`${gateway} does not support Partial Reimburse`);
    }
    return service.PartialReimburse(gateway);
  }
}
