import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './products/products.module';
import { CommentsModule } from './comments/comments.module';
import { UsersModule } from './users/users.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env.local',
    }),
    MongooseModule.forRoot(process.env.DB_URL),
    UsersModule,
    ProductsModule,
    CommentsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
