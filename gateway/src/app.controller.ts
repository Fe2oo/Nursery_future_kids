import { Controller, Get, Post, Param, Body, Query } from '@nestjs/common';
import axios from 'axios';

@Controller('api')
export class AppController {
  private readonly assignmentsUrl = 'http://localhost:8003/api/assignments';
  private readonly userUrl = 'http://localhost:8002/api/user';
  private readonly subjectsUrl = 'http://localhost:8001/api/subjects';

  // Proxy for Assignments
  @Get('assignments')
  async getAssignments(@Query() query: any) {
    const response = await axios.get(this.assignmentsUrl, { params: query });
    return response.data;
  }

  @Post('assignments')
  async createAssignment(@Body() body: any) {
    const response = await axios.post(this.assignmentsUrl, body);
    return response.data;
  }

  // Proxy for Users
  @Get('user')
  async getUsers(@Query() query: any) {
    const response = await axios.get(this.userUrl, { params: query });
    return response.data;
  }

  @Post('user')
  async createUser(@Body() body: any) {
    const response = await axios.post(this.userUrl, body);
    return response.data;
  }

  // Proxy for Subjects
  @Get('subjects')
  async getSubjects(@Query() query: any) {
    const response = await axios.get(this.subjectsUrl, { params: query });
    return response.data;
  }

  @Post('subjects')
  async createSubject(@Body() body: any) {
    const response = await axios.post(this.subjectsUrl, body);
    return response.data;
  }
}
