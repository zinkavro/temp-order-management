import { Get, Controller, Post, Patch, Body, Param, UseGuards } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}


  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() dto: CreateOrderDto) {
    return this.orderService.createOrder(dto);
  }

  @Get()
  getAllOrders() {
    return this.orderService.getAllOrders();
  }

  @Get(':id')
getOrderById(@Param('id') id: string) {
  return this.orderService.getOrderById(id);
}

  @UseGuards(JwtAuthGuard)
  @Patch(':orderId/status')
async updateOrderStatus(
  @Param('orderId') orderId: string,
  @Body('status') status: string,
) {
  return this.orderService.updateStatus(orderId, status);
}
}
