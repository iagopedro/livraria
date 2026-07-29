import { Component } from '@angular/core';
import { Livro } from '../livro/livro';
import { LivroModel } from '../models/livro.model';

@Component({
  selector: 'app-livros-page',
  imports: [Livro],
  templateUrl: './livros-page.html',
  styleUrl: './livros-page.css',
})
export class LivrosPage {

  livros: LivroModel[] = [
    new LivroModel('O Senhor dos Anéis', 'J.R.R. Tolkien', 1954),
    new LivroModel('1984', 'George Orwell', 1949),
    new LivroModel('O Pequeno Príncipe', 'Antoine de Saint-Exupéry', 1943),
  ];

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
}