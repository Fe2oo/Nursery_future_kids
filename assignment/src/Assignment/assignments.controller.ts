import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { AssignmentsService } from './assignments.service';
import { Assignment } from './assignments.model';

@Controller('assignments')
export class AssignmentsController {
  constructor(private readonly assignmentsService: AssignmentsService) {}

  @Post()
  async createAssignment(
    @Body('title') title: string,
    @Body('description') description: string,
    @Body('image') image: string,
  ): Promise<Assignment> {
    return this.assignmentsService.createAssignment(title, description, image);
  }

  @Get()
  async getAllAssignments(): Promise<Assignment[]> {
    return this.assignmentsService.getAllAssignments();
  }

  @Get(':id')
  async getAssignmentById(@Param('id') id: string): Promise<Assignment> {
    return this.assignmentsService.getAssignmentById(id);
  }

  @Put(':id')
  async updateAssignment(
    @Param('id') id: string,
    @Body('title') title: string,
    @Body('description') description: string,
    @Body('image') image: string,
  ): Promise<Assignment> {
    return this.assignmentsService.updateAssignment(id, title, description, image);
  }

  @Delete(':id')
  async deleteAssignment(@Param('id') id: string): Promise<Assignment> {
    return this.assignmentsService.deleteAssignment(id);
  }
}
