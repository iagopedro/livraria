import { Component } from '@angular/core';

@Component({
  selector: 'app-livro',
  imports: [],
  templateUrl: './livro.html',
  styleUrl: './livro.css',
})
export class Livro {
  
  titulo: string;
  autor: string;
  anoPublicacao: number;
  
  constructor() {
    this.titulo = 'O Senhor dos Anéis';
    this.autor = 'J.R.R. Tolkien';
    this.anoPublicacao = 1954;
  } 
  
  // TODO: Criar getters e setters para acessar e modificar os dados do livro

  // TODO: Criar métodos para manipular os dados do livro
  
}
