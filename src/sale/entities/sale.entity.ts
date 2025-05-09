import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class Sale {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  customerName: string;

  @Column()
  value: number;

  @Column({ type: 'text', nullable: true })
  signatureBase64?: string;

  @CreateDateColumn()
  createdAt: Date;
}
