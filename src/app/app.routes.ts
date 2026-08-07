import { Routes } from '@angular/router';
import { LivrosPage } from './components/livros-page/livros-page';
import { LivroDetalhesPage } from './components/livro-detalhes-page/livro-detalhes-page';

export const routes: Routes = [
  // Rota para página de livros
  {
    path: 'livros',
    component: LivrosPage
  }
,
  // Rota para página de detalhes do livro
  {
    path: 'livros/:id',
    component: LivroDetalhesPage
  }
,



  // Rota para página inicial (cenário onde a rota é VAZIA)
  {
    path: '',
    redirectTo: '/livros',
    pathMatch: 'full'
  }
];
