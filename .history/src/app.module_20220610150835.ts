import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://teste01:<password>@cluster0.k3vooxh.mongodb.net/test')],
  controllers: [],
  providers: [],
})
export class AppModule {}
