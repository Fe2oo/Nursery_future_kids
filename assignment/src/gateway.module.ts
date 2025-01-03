import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AssignmentsModule } from './Assignment/assignments.module';

@Module({
  imports: [
    AssignmentsModule,
    ClientsModule.register([
      {
        name: 'ASSIGNMENTS_SERVICE',
        transport: Transport.TCP,
        options: { host: 'localhost', port: 8003 },
      },
    ]),
  ],
})
export class GatewayModule {}
