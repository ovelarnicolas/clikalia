import { Module } from '@nestjs/common';
import { Pgateway2Service } from './pgateway_2.service';

@Module({
  providers: [Pgateway2Service],
})
export class Pgateway2Module {}
