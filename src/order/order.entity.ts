import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn('uuid')
  orderId: string;

  @Column()
  userId: string;

  @Column({ default: 'pending' })
  status: string;

  @Column('decimal')
  totalAmount: number;

  @CreateDateColumn()
  createdAt: Date;
}
