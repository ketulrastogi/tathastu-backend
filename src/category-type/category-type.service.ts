import { Injectable, NotFoundException } from '@nestjs/common';
import { CategoryType } from './category-type.model';

@Injectable()
export class CategoryTypeService {

    private categoryTypes: CategoryType[] = [];

    getCategoryTypes() {
        return [...this.categoryTypes];
    }

    getSingleCategoryType(id: string) {
        const categoryType = this.findCategoryType(id)[0];
        return { ...categoryType };
    }

    insertCategoryType(name: string, iconUrl: string) {
        const id = Math.random().toString();
        const newCategoryType = new CategoryType(id, name, iconUrl);
        this.categoryTypes.push(newCategoryType);
        return id;
    }

    updateCategoryType(id: string, name: string, iconUrl: string) {
        const [product, index] = this.findCategoryType(id);
        const updatedCategoryType = { ...product };
        if (name) {
          updatedCategoryType.name = name;
        }
        if (iconUrl) {
          updatedCategoryType.iconUrl = iconUrl;
        }
        
        this.categoryTypes[index] = updatedCategoryType;
      }

      deleteCategoryType(prodId: string) {
        const index = this.findCategoryType(prodId)[1];
        this.categoryTypes.splice(index, 1);
    }

    private findCategoryType(id: string): [CategoryType, number] {
        const categoryTypeIndex = this.categoryTypes.findIndex(categoryType => categoryType.id === id);
        const categoryType = this.categoryTypes[categoryTypeIndex];
        if (!categoryType) {
            throw new NotFoundException('Could not find product.');
        }
        return [categoryType, categoryTypeIndex];
    }
}
