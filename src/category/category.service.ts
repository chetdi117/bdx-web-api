import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from '../entity';
import { StringHelper } from '../helpers';
import { CategoryForm } from '../dto';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  async getCategory(query: string = ''): Promise<Category[]> {
    if (query) {
      query = StringHelper.removePunctuation(query).trim();
      return this.categoryRepository
        .createQueryBuilder('category')
        .where('category.name LIKE :name', { name: `%${query}%` })
        .getMany();
    }
    return this.categoryRepository.find();
  }

  async getCategoryById(id: number): Promise<Category | null> {
    return this.categoryRepository.findOneBy({ id });
  }

  async createCategory(categoryFrm: CategoryForm): Promise<Category> {
    const category = new Category();
    category.name = categoryFrm.name;
    category.description = categoryFrm.description;
    category.createDate = new Date();
    category.userId = 1;
    try {
      return this.categoryRepository.save(category);
    } catch (error) {
      throw new Error('Error creating category');
    }
  }

  async updateCategory(
    categoryFrm: CategoryForm,
    id: number,
  ): Promise<Category> {
    const category = await this.categoryRepository.findOneBy({ id });
    if (!category) {
      throw new Error('Category not found');
    }
    category.name = categoryFrm.name;
    category.description = categoryFrm.description;
    category.updateDate = new Date();
    return this.categoryRepository.save(category);
  }

  async deleteCategory(id: number): Promise<Category> {
    try {
      const category = await this.categoryRepository.findOneBy({ id });
      if (!category) {
        throw new Error('Category not found');
      }
      await this.categoryRepository.delete(id);
      return category;
    } catch (error) {
      throw new Error('Error deleting category');
    }
  }
}
