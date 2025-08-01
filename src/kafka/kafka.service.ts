import { Injectable } from '@nestjs/common';

@Injectable()
export class KafkaService {
  async emit(topic: string, payload: any): Promise<void> {
    console.log(`[Kafka Mock] Topic: ${topic}`);
    console.log(`[Kafka Mock] Payload:`, payload);
  }
}
