import { Routes } from '@angular/router';
import { Livro } from './livro/livro';

export const routes: Routes = [
  // TODO: Criar rota para livro
  {
    path: 'livro',
    component: Livro
  }
,
  // TODO: Criar rota para página inicial
  {
    path: '',
    redirectTo: '/livro',
    pathMatch: 'full'
  }
];
