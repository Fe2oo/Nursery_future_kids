import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AssignmentsModule } from './Assignment/assignments.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI),
    AssignmentsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
