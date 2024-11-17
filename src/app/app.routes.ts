import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { MenuComponent } from './views/menu/menu.component';
import { NotfoundComponent } from './views/notfound/notfound.component';

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
    // Rota para página não encontrada
    path: '**',
    component: NotfoundComponent,
    title: 'Página não encontrada',
  },
];
