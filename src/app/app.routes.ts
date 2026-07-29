import { Routes } from '@angular/router';
import { LivrosPage } from './components/livros-page/livros-page';

export const routes: Routes = [
  // Rota para livro
  {
    path: 'livro',
    component: LivrosPage
  }
,
  // Rota para página inicial
  {
    path: '',
    redirectTo: '/livro',
    pathMatch: 'full'
  }
];
