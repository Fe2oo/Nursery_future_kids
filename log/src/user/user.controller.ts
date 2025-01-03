import { Body, Controller, Post, Get, Param, Patch, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { SignupDto, LoginDto } from './user.dto';
import { user, userDocument } from './user.model'; 

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll(): Promise<user[]> {
    return this.userService.findAll();
  }

  @Post('signup')
  async signup(@Body() signupDto: SignupDto) {
    return this.userService.signup(
      signupDto.name,
      signupDto.email,
      signupDto.password,
      signupDto.age,
    );
  }

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    return this.userService.login(loginDto.email, loginDto.password);
  }

  // GET user by name
  @Get('name/:name')
  async getUserByName(@Param('name') name: string) {
    return this.userService.getUserByName(name); // Get user by name
  }

  // DELETE user by name
  @Delete('name/:name')
  async deleteUser(@Param('name') name: string) {
    return this.userService.deleteUserByName(name); // Delete user by name
  }
}
