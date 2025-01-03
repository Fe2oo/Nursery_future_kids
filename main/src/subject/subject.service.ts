import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { subject, subjectDocument } from './subject.model';

@Injectable()
export class SubjectService {
  constructor(
    @InjectModel(subject.name) private readonly subjectmodel: Model<subjectDocument>,
  ) {}

  // Retrieve all subjects
  async all(): Promise<subject[]> {
    return this.subjectmodel.find().exec();
  }

  // Retrieve a single subject by its ID
  async findOneById(id: number): Promise<subject> {
    // Query by custom id (not Mongo's _id)
    const subject = await this.subjectmodel.findOne({ id }).exec();
    if (!subject) {
      throw new NotFoundException('Subject not found');
    }
    return subject;
  }

  // Create a new subject
  async create(data: Partial<subject>): Promise<subject> {
    return new this.subjectmodel(data).save();
  }

  // Update an existing subject by its ID
  async update(id: number, data: Partial<subject>): Promise<subject> {
    const updatedSubject = await this.subjectmodel.findOneAndUpdate(
      { id },
      data,
      { new: true },
    ).exec();
    if (!updatedSubject) {
      throw new NotFoundException('Subject not found');
    }
    return updatedSubject;
  }

  // Delete a subject by its ID
  async delete(id: number): Promise<void> {
    const result = await this.subjectmodel.findOneAndDelete({ id }).exec();
    if (!result) {
      throw new NotFoundException('Subject not found');
    }
  }
}
