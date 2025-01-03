import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AssignmentsController } from './assignments.controller';
import { AssignmentsService } from './assignments.service';
import { AssignmentSchema } from './assignments.model';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Assignment', schema: AssignmentSchema }])],
  controllers: [AssignmentsController],
  providers: [AssignmentsService],
})
export class AssignmentsModule {}
