import { Module } from '@nestjs/common';
import { CategoryTypeController } from './category-type.controller';
import { CategoryTypeService } from './category-type.service';

@Module({
  controllers: [CategoryTypeController],
  providers: [CategoryTypeService]
})
export class CategoryTypeModule {}
