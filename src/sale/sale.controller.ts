import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { SaleService } from './sale.service';
import { CreateSaleDto } from './dto/create-sale.dto';
import { SignSaleDto } from './dto/sign-sale.dto';

@Controller('sales')
export class SaleController {
  constructor(private readonly saleService: SaleService) {}

  @Post()
  create(@Body() dto: CreateSaleDto) {
    return this.saleService.create(dto);
  }

  @Get()
  findAll() {
    return this.saleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.saleService.findOne(+id);
  }

  @Post(':id/signature')
  sign(@Param('id') id: string, @Body() body: SignSaleDto) {
    return this.saleService.sign(+id, body.signatureBase64);
  }
}
