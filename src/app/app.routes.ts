import { Routes } from '@angular/router';
import { LivrosPage } from './components/livros-page/livros-page';
import { LivroDetalhesPage } from './components/livro-detalhes-page/livro-detalhes-page';

export const routes: Routes = [
  // Rota para livros
  {
    path: 'livros',
    component: LivrosPage
  }
,
  // Rota para página inicial
  {
    path: '',
    redirectTo: '/livros',
    pathMatch: 'full'
  }
,
  {
    path: 'livros/:id',
    component: LivroDetalhesPage
  }
];
