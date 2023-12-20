import { IsEnum, IsNumberString, IsString, Length } from 'class-validator';
import { Currency } from '../interfaces/currency.enum';
import { PGatewayType } from '../interfaces/pgateway-type.enum';
import { ApiProperty } from '@nestjs/swagger';

export class PayDto {
  @IsString()
  @ApiProperty({ example: 'Nicolas Ovelar', description: 'Name of the Client' })
  name: string;

  @IsNumberString()
  @ApiProperty({
    example: '4545424266662222',
    description: 'Credit Card Number without spaces',
  })
  cardNumber: string;

  @IsNumberString()
  @Length(3, 3)
  @ApiProperty({ example: '000', description: 'CVV of the Credit Card' })
  cvv: string;

  @ApiProperty({ example: '01/30', description: 'MM/YY' })
  expirationDate: string;

  @ApiProperty({ example: '999', description: 'Amount' })
  @IsNumberString()
  amount: number;

  @ApiProperty({ example: 'USD', description: 'Currency' })
  @IsEnum(Currency)
  currency: Currency;

  @ApiProperty({ example: 'pgateway_1', description: 'Name of the Gateway' })
  @IsEnum(PGatewayType)
  gateway: PGatewayType;
}
