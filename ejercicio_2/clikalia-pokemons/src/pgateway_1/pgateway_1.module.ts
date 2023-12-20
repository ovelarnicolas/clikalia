import { Module } from '@nestjs/common';
import { Pgateway1Service } from './pgateway_1.service';

@Module({
  controllers: [],
  providers: [Pgateway1Service],
})
export class Pgateway1Module {}
