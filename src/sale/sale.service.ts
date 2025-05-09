import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sale } from './entities/sale.entity';
import { CreateSaleDto } from './dto/create-sale.dto';

@Injectable()
export class SaleService {
  constructor(
    @InjectRepository(Sale)
    private saleRepo: Repository<Sale>,
  ) {}

  create(dto: CreateSaleDto) {
    const sale = this.saleRepo.create(dto);
    return this.saleRepo.save(sale);
  }

  findAll() {
    return this.saleRepo.find();
  }

  async sign(id: number, signatureBase64: string) {
    const sale = await this.saleRepo.findOneBy({ id });
    if (!sale) throw new NotFoundException('Sale not found');
    sale.signatureBase64 = signatureBase64;
    return this.saleRepo.save(sale);
  }

  findOne(id: number) {
    return this.saleRepo.findOneBy({ id });
  }
}
