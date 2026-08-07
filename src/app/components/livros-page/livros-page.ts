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
    this.carregarLivros();
  }
  // Exemplo de outro método de ciclo de vida:

  // ngOnDestroy() {
  //   console.log("Componente excluído!", Date.now())
  // }

  // Função criada para carregar livros, evitando repetição de código
  carregarLivros() {
    // Dados que vem do Local Storage são do tipo STRING
    const dados = localStorage.getItem("lista_livros")

    if(!dados) {
      this.livros = this.livroService.getLivros();
    } else {
      this.livros = JSON.parse(dados);
    }
  }


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

    // BUG visto em aula: necessário atualizar a lista do componente
    // ao cadastrar um novo livro
    this.carregarLivros();
  }
}