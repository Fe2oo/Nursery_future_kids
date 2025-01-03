import { Controller, Post, Get, Body, Patch, Param, Delete } from '@nestjs/common';
import { SubjectService } from './subject.service';

@Controller('subjects') // Prefix for the routes
export class SubjectController {
  constructor(private readonly subjectService: SubjectService) {}

  // Retrieve all subjects
  @Get()
  async all() {
    return this.subjectService.all();
  }

  // Retrieve a single subject by its ID (number)
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const numericId = parseInt(id, 10); // Convert the id from string to number
    return this.subjectService.findOneById(numericId);
  }

  // Create a new subject
  @Post()
  async create(@Body() body: { title: string; image: string }) {
    return this.subjectService.create(body);
  }

  // Update an existing subject by its ID
  @Patch(':id')
  async update(@Param('id') id: string, @Body() body: { title?: string; image?: string }) {
    const numericId = parseInt(id, 10); // Convert the id from string to number
    return this.subjectService.update(numericId, body);
  }

  // Delete a subject by its ID
  @Delete(':id')
  async delete(@Param('id') id: string) {
    const numericId = parseInt(id, 10); // Convert the id from string to number
    return this.subjectService.delete(numericId);
  }
}
