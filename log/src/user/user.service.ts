import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { user, userDocument } from './user.model'; 
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class UserService {
  constructor(@InjectModel(user.name) private readonly userModel: Model<userDocument>) {}

  // Fetch all users
  async findAll(): Promise<user[]> {
    return this.userModel.find().exec();
  }

  // Signup a new user
  async signup(name: string, email: string, password: string, age: number) {
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new this.userModel({
      name,
      email,
      password: hashedPassword,
      age,
    });

    return newUser.save();
  }

  // Login method to authenticate user and generate JWT token
  async login(email: string, password: string) {
    const user = await this.userModel.findOne({ email });
    if (!user) {
      return { message: 'wrong email' };
    }

    // Compare password with the stored hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return { message: 'wrong password' };
    }

    // Generate JWT token
    const payload = { userId: user.id, email: user.email };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });  // Replace 'your_jwt_secret_key' with a secure key

    return { message: 'Login successful', token };  // Return the JWT token
  }

  // Get user by name
  async getUserByName(name: string) {
    const user = await this.userModel.findOne({ name });
    if (!user) {
      return { message: 'User not found' };
    }
    return user;
  }

  // Delete user by name
  async deleteUserByName(name: string) {
    const result = await this.userModel.deleteOne({ name });
    if (result.deletedCount === 0) {
      return { message: 'User not found' };
    }
    return { message: 'User deleted successfully' };
  }
}
