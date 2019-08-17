import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryTypeModule } from './category-type/category-type.module';

@Module({
  imports: [CategoryTypeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
