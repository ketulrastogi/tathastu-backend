import { Controller, Get, Param, Post, Body, Patch, Delete } from '@nestjs/common';
import { CategoryTypeService } from './category-type.service';

@Controller('category-type')
export class CategoryTypeController {
    constructor(private readonly categoryTypeService: CategoryTypeService) { }

    @Get()
    getAllCategoryTypes() {
        return this.categoryTypeService.getCategoryTypes();
    }

    @Get(':id')
    getSingleCategoryType(@Param('id') id: string) {
        return this.categoryTypeService.getSingleCategoryType(id);
    }

    @Post()
    addProduct(
        @Body('name') name: string,
        @Body('iconUrl') iconUrl: string,
    ) {
        const generatedId = this.categoryTypeService.insertCategoryType(
            name,
            iconUrl
        );
        return { id: generatedId };
    }

    @Patch(':id')
    updateProduct(
        @Param('id') id: string,
        @Body('title') name: string,
        @Body('description') iconUrl: string,
    ) {
        this.categoryTypeService.updateCategoryType(id, name, iconUrl);
        return null;
    }

    @Delete(':id')
    removeProduct(@Param('id') id: string) {
        this.categoryTypeService.deleteCategoryType(id);
        return null;
    }

}
