import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SubjectModule } from './subject/subject.module';
import { ConfigModule, ConfigService } from '@nestjs/config'; // Import the ConfigModule and ConfigService

@Module({
  imports: [
    // Load environment variables from the .env file
    ConfigModule.forRoot({
      isGlobal: true, // Makes the config globally accessible
      envFilePath: '.env', // Path to the .env file
    }),

    // Configure Mongoose using environment variables
    MongooseModule.forRootAsync({
      imports: [ConfigModule], // Import ConfigModule to access the config
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_URI'), // Get the MONGO_URI from environment variables
        autoCreate: true, // Auto-create the database if it doesn't exist
      }),
      inject: [ConfigService], // Inject ConfigService to access environment variables
    }),

    SubjectModule, // Ensure SubjectModule is imported here
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
