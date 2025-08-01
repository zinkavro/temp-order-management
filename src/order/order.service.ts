import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './order.entity';
import { CreateOrderDto } from './dto/create-order.dto';
import { KafkaService } from '../kafka/kafka.service';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private readonly repo: Repository<Order>,
    private readonly kafka: KafkaService,
  ) {}

  async createOrder(dto: CreateOrderDto): Promise<Order> {
    const order = this.repo.create(dto);
    const savedOrder = await this.repo.save(order);

    await this.kafka.emit('order-created', savedOrder); // Kafka message

    return savedOrder;
  }

  async getAllOrders() {
  return this.repo.find();
}

async getOrderById(id: string) {
  const order = await this.repo.findOneBy({ orderId: id });
  if (!order) {
    throw new NotFoundException('Order not found');
  }
  return order;
}

  async updateStatus(orderId: string, status: string): Promise<Order> {
    const order = await this.repo.findOneBy({ orderId });

    if (!order) {
      throw new NotFoundException('Order not found');
    }

    order.status = status;
    const updated = await this.repo.save(order);

    await this.kafka.emit('order-status-updated', updated);

    return updated;
  }
}
