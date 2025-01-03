import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: ['amqps://mzcptzpn:9WXuW2Fav1obCbvsCF6h6LMYnxE7mqh-@horse.lmq.cloudamqp.com/mzcptzpn'], 
      queue: 'main_queue', 
      queueOptions: {
        durable: false, 
      },
    },
  });

  await app.listen();
  console.log('Microservice is listening on RabbitMQ');
}

bootstrap();
