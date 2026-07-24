import { Component } from '@angular/core';

@Component({
  selector: 'app-livro',
  imports: [],
  templateUrl: './livro.html',
  styleUrl: './livro.css',
})
export class Livro {
  
  private titulo: string;
  private autor: string;
  private anoPublicacao: number;
  
  constructor() {
    this.titulo = 'O Senhor dos Anéis';
    this.autor = 'J.R.R. Tolkien';
    this.anoPublicacao = 1954;
  } 
  
  // TODO: Criar getters e setters para acessar e modificar os dados do livro

  // GETTERS
  getTitulo(): string {
    return this.titulo;
  }

  getAutor(): string {
    return this.autor;
  }

  getAnoPublicacao(): number {
    return this.anoPublicacao;
  }

  // SETTERS
  setTitulo(novoTitulo: string): void {
    this.titulo = novoTitulo;
  }

  setAutor(novoAutor: string): void {
    this.autor = novoAutor;
  }

  setAnoPublicacao(novoAnoPublicacao: number): void {
    this.anoPublicacao = novoAnoPublicacao;
  }

  // TODO: Criar métodos para manipular os dados do livro
  alterarTitulo(): void {
    const novoTitulo: string | null = prompt("Digite o novo título:");

    if (novoTitulo === null || novoTitulo === '') {
      alert("O valor informado não pode ser nulo ou vazio!");
      return;
    } else {
      this.setTitulo(novoTitulo);
    }
  }

  alterarAutor(): void {
    const novoAutor: string | null = prompt("Digite o novo autor:");

    if (novoAutor === null || novoAutor === '') {
      alert("O valor informado não pode ser nulo ou vazio!");
      return;
    } else {
      this.setAutor(novoAutor);
    }
  }

  alterarAnoPublicacao(): void {
    const novoAnoPublicacao: string | null = prompt("Digite o novo ano:");
    const valor = Number(novoAnoPublicacao);

    if (novoAnoPublicacao === null || novoAnoPublicacao === '') {
      alert("O valor informado não pode ser nulo ou vazio!");
      return;
    } else if (isNaN(valor)) {
      alert("O valor informado não é um número válido!");
      return;
    }

    this.setAnoPublicacao(valor);
  }

}
