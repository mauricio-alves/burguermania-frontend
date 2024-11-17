import { Injectable } from '@angular/core';
import { CategoryInterface } from '../interfaces/category-interface';
import { BurgerInterface } from '../interfaces/burger-interface';

@Injectable({
  providedIn: 'root',
})
export class BurgersService {
  url = 'http://localhost:3000';

  constructor() {}

  // Retorna todas as categorias de hamburgueres
  async getCategories(): Promise<CategoryInterface[]> {
    const data = await fetch(`${this.url}/categories`);
    return data.json();
  }

  // Retorna todos os hamburgueres de uma categoria específica
  async getBurgers(id: number): Promise<BurgerInterface[]> {
    const data = await fetch(`${this.url}/burgers?categoryId=${id}`);
    return data.json();
  }

  // Retorna um hamburguer específico
  async getBurger(id: number): Promise<BurgerInterface> {
    const data = await fetch(`${this.url}/burgers?id=${id}`);
    return data.json();
  }
}
