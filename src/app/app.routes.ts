import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    // Rota para a página inicial
    {
      path: '',
      component: HomeComponent,
      title: 'Projeto Final - Burguer Mania',
    },
];
