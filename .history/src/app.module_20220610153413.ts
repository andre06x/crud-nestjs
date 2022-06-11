import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from './users/users.controller';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://teste01:kvHCl1Qpe5Nrq078@cluster0.k3vooxh.mongodb.net/test',
    ),
  ],
  controllers: [UsersController],
  providers: [],
})
export class AppModule {}
