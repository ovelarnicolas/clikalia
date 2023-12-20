import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e) tests', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/api/pay', () => {
    const payDto = {
      name: 'Nicolas Ovelar',
      cardNumber: '4545424266662222',
      cvv: '000',
      expirationDate: '01/30',
      amount: 999,
      currency: 'USD',
      gateway: 'pgateway_1',
    };
    return request(app.getHttpServer())
      .post('/api/pay')
      .send(payDto)
      .expect(201);
  });

  it('/api/pay without gateway must fail with "Invalid gateway type"', () => {
    const payDto = {
      name: 'Nicolas Ovelar',
      cardNumber: '4545424266662222',
      cvv: '000',
      expirationDate: '01/30',
      amount: 999,
      currency: 'USD',
    };
    return request(app.getHttpServer())
      .post('/api/pay')
      .send(payDto)
      .expect(500);
  });

  it('/api/reimburse/pgateway_1', () => {
    return request(app.getHttpServer())
      .get('/api/reimburse/pgateway_1')
      .expect(200);
  });

  it('/api/reimburse/pgateway_2', () => {
    return request(app.getHttpServer())
      .get('/api/reimburse/pgateway_1')
      .expect(200);
  });

  it('/api/reimburse/pgateway_3 must fail with "Validation failed"', () => {
    return request(app.getHttpServer())
      .get('/api/reimburse/pgateway_3')
      .expect(400);
  });
});
