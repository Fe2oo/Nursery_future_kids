import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { user, userSchema } from './user.model'; // Import the correct user schema

@Module({
  imports: [
    MongooseModule.forFeature([{ name: user.name, schema: userSchema }]),  // Ensure the correct model name
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
