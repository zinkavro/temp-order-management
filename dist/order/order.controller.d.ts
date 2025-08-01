import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
export declare class OrderController {
    private readonly orderService;
    constructor(orderService: OrderService);
    create(dto: CreateOrderDto): Promise<import("./order.entity").Order>;
    getAllOrders(): Promise<import("./order.entity").Order[]>;
    getOrderById(id: string): Promise<import("./order.entity").Order>;
    updateOrderStatus(orderId: string, status: string): Promise<import("./order.entity").Order>;
}
