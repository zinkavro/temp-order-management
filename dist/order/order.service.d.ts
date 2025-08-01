import { Repository } from 'typeorm';
import { Order } from './order.entity';
import { CreateOrderDto } from './dto/create-order.dto';
import { KafkaService } from '../kafka/kafka.service';
export declare class OrderService {
    private readonly repo;
    private readonly kafka;
    constructor(repo: Repository<Order>, kafka: KafkaService);
    createOrder(dto: CreateOrderDto): Promise<Order>;
    getAllOrders(): Promise<Order[]>;
    getOrderById(id: string): Promise<Order>;
    updateStatus(orderId: string, status: string): Promise<Order>;
}
