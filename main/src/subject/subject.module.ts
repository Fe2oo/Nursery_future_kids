import { Module } from '@nestjs/common';
import { SubjectController } from './subject.controller';
import { SubjectService } from './subject.service';
import { MongooseModule } from '@nestjs/mongoose';
import {subject, subjectSchema } from './subject.model';

@Module({
  imports:[
    MongooseModule.forFeature([{name:subject.name,schema: subjectSchema}])
  ],
  controllers: [SubjectController],
  providers: [SubjectService]
})
export class SubjectModule {}
