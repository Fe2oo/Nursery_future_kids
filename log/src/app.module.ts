import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config'; // Import ConfigModule and ConfigService
import { UserModule } from './user/user.module'; // Ensure this is the correct path

@Module({
  imports: [
    // Initialize ConfigModule to load environment variables
    ConfigModule.forRoot({
      isGlobal: true, // Make the config globally accessible
      envFilePath: '.env', // Load variables from the .env file
    }),

    // Use forRootAsync to set up Mongoose with the MONGO_URI from the environment
    MongooseModule.forRootAsync({
      imports: [ConfigModule], // Import the ConfigModule
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_URI'), // Get MONGO_URI from environment variables
        autoCreate: true, // Automatically create the database if it doesn't exist
      }),
      inject: [ConfigService], // Inject ConfigService to access the environment variables
    }),

    UserModule, // Ensure UserModule is correctly imported here
  ],
})
export class AppModule {}
