import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LivroModel } from '../models/livro.model';
import { RouterLink } from '@angular/router';
import { LivroService } from '../../services/livro-service';

@Component({
  selector: 'app-livro',
  imports: [
    RouterLink
  ],
  templateUrl: './livro.html',
  styleUrl: './livro.css',
})
export class Livro {

  constructor(private livroService: LivroService) {}

  @Input() livro!: LivroModel;
  @Input() mostrarBotoes: boolean = false;

  // Dispara um evento para o componente pai, 
  // avisando da exclusão de um livro
  @Output() livroExcluido = new EventEmitter<number>();

  alterarTitulo(): void {
    const novoTitulo = prompt("Digite o novo título:");

    if (novoTitulo === null) {
      return;
    }

    if (novoTitulo.trim() === '') { 
      alert("Título não pode ser vazio!");
      return; 
    }

    this.livro.titulo = novoTitulo;
  }

  alterarAutor(): void {
    const novoAutor = prompt("Digite o novo autor:");
    if (!novoAutor) { 
      alert("Autor não pode ser vazio!"); 
      return; 
    }
    this.livro.autor = novoAutor;
  }

  alterarAnoPublicacao(): void {
    const novoAno = prompt("Digite o novo ano:");
    const valor = Number(novoAno);
    if (!novoAno) { 
      alert("Ano não pode ser vazio!"); 
      return; 
    }
    if (isNaN(valor)) { 
      alert("Não é um número válido!"); 
      return; 
    }
    this.livro.anoPublicacao = valor;
  }

  excluirLivro(livroId: number) {
    const confirmacaoUsuario = confirm("Deseja realmente excluir o livro?");
    
    if (confirmacaoUsuario) {
      this.livroService.excluirLivro(livroId);
      alert("Livro excluído com sucesso!");
      // Avisa o componente pai para recarregar a lista
      this.livroExcluido.emit(livroId);
    }
  }
}