import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { MenuComponent } from './views/menu/menu.component';
import { NotFoundComponent } from './views/notfound/notfound.component';
import { CategoryComponent } from './views/category/category.component';
import { BurgerDetailsComponent } from './views/burger-details/burger-details.component';
import { OrderComponent } from './views/order/order.component';

export const routes: Routes = [
  {
    // Rota para a página inicial
    path: '',
    component: HomeComponent,
    title: 'Projeto Final - Burguer Mania',
  },
  {
    // Rota para o cardápio
    path: 'menu',
    component: MenuComponent,
    title: 'Burguer Mania - Menu',
  },
  {
    // Rota para a categoria de hamburgueres
    path: 'category/:id',
    component: CategoryComponent,
    title: 'Burguer Mania - Categorias',
  },
  {
    // Rota para o hamburguer específico
    path: 'burgers/:id',
    component: BurgerDetailsComponent,
    title: 'Burguer Mania - Detalhes',
  },
  {
    // Rota para página de pedidos
    path: 'order',
    component: OrderComponent,
    title: 'Burguer Mania - Pedidos',
  },
  {
    // Rota para página não encontrada
    path: '**',
    component: NotFoundComponent,
    title: 'Página não encontrada',
  },
];
