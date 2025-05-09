import { IsString } from 'class-validator';

export class SignSaleDto {
  @IsString()
  signatureBase64: string;
}
