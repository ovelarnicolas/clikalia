import { Module } from '@nestjs/common';
import { CoreModule } from './core/core.module';
import { Pgateway1Module } from './pgateway_1/pgateway_1.module';
import { AppController } from './app.controller';
import { Pgateway1Service } from './pgateway_1/pgateway_1.service';
import { Pgateway2Module } from './pgateway_2/pgateway_2.module';
import { Pgateway2Service } from './pgateway_2/pgateway_2.service';

@Module({
  imports: [CoreModule, Pgateway1Module, Pgateway2Module],
  controllers: [AppController],
  providers: [Pgateway1Service, Pgateway2Service],
})
export class AppModule {}
