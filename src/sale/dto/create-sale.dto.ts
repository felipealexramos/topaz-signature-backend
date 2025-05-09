import { IsString, IsNumber } from 'class-validator';

export class CreateSaleDto {
  @IsString()
  customerName: string;

  @IsNumber()
  value: number;
}
