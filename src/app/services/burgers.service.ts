import { Injectable } from '@angular/core';
import { CategoryInterface } from '../interfaces/category-interface';
import { BurgerInterface } from '../interfaces/burger-interface';
import { OrderInterface } from '../interfaces/order-interface';

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

  // Retorna uma categoria específica
  async getCategory(id: number): Promise<CategoryInterface> {
    const response = await fetch(`${this.url}/categories?id=${id}`);
    const data: CategoryInterface[] = await response.json();
    return data[0];
  }

  // Retorna todos os hamburgueres de uma categoria específica
  async getBurgers(id: number): Promise<BurgerInterface[]> {
    const data = await fetch(`${this.url}/burgers?categoryId=${id}`);
    return data.json();
  }

  // Retorna um hamburguer específico
  async getBurger(id: number): Promise<BurgerInterface> {
    const response = await fetch(`${this.url}/burgers?id=${id}`);
    const data: BurgerInterface[] = await response.json();
    return data[0];
  }

  // Cria um novo pedido
  async createOrder(order: OrderInterface): Promise<void> {
    await fetch(`${this.url}/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(order),
    });
  }
}
