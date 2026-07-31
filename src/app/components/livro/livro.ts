import { Component, Input } from '@angular/core';
import { LivroModel } from '../models/livro.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-livro',
  imports: [
    RouterLink
  ],
  templateUrl: './livro.html',
  styleUrl: './livro.css',
})
export class Livro {

  @Input() livro!: LivroModel;
  @Input() mostrarBotoes: boolean = false;

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
}