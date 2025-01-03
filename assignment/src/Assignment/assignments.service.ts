import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Assignment } from './assignments.model';

@Injectable()
export class AssignmentsService {
  constructor(@InjectModel('Assignment') private readonly assignmentModel: Model<Assignment>) {}

  async createAssignment(title: string, description: string, image: string): Promise<Assignment> {
    const newAssignment = new this.assignmentModel({ title, description, image });
    return newAssignment.save();
  }

  async getAllAssignments(): Promise<Assignment[]> {
    return this.assignmentModel.find().exec();
  }

  async getAssignmentById(id: string): Promise<Assignment> {
    return this.assignmentModel.findById(id).exec();
  }

  async updateAssignment(id: string, title: string, description: string, image: string): Promise<Assignment> {
    return this.assignmentModel.findByIdAndUpdate(id, { title, description, image }, { new: true }).exec();
  }

  async deleteAssignment(id: string): Promise<Assignment> {
    return this.assignmentModel.findByIdAndDelete(id).exec();
  }
}
