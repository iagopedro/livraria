import { Component } from '@angular/core';
import { Livro } from '../livro/livro';
import { LivroModel } from '../models/livro.model';
import { LivroService } from '../../services/livro-service';

@Component({
  selector: 'app-livros-page',
  imports: [Livro],
  templateUrl: './livros-page.html',
  styleUrl: './livros-page.css',
})
export class LivrosPage {
  livros?: LivroModel[];

  // Lista virá do Service via injeção de dependências
  constructor(private livroService: LivroService) { }

  // Um dos métodos disponíveis de ciclo de vida
  ngOnInit() {
    // Carrega a lista de livros no momento da inicialização do componente
    this.livros = this.livroService.getLivros();
  }

  // Exemplo de outro método de ciclo de vida:

  // ngOnDestroy() {
  //   console.log("Componente excluído!", Date.now())
  // }

  selecionadoIndex: number | null = null;

  selecionar(index: number): void {
    // Lógica de condição (IF ternário)
    this.selecionadoIndex = this.selecionadoIndex === index ? null : index;

    // Lógica com IF comum
    // if (this.selecionadoIndex === index) {
    //   this.selecionadoIndex = null
    // } else {
    //   this.selecionadoIndex = index;
    // }
  }

  cadastrarLivro() {
    // Delegar criação de livro para o Service
    this.livroService.cadastrarLivro();
  }
}