import { Injectable } from '@angular/core';
import { LivroModel } from './components/models/livro.model';


@Injectable({
  providedIn: 'root',
})
export class LivroService {
  private livros: LivroModel[] = [
    new LivroModel(1, 'O Senhor dos Anéis', 'J.R.R. Tolkien', 1954),
    new LivroModel(2, '1984', 'George Orwell', 1949),
    new LivroModel(3, 'O Pequeno Príncipe', 'Antoine de Saint-Exupéry', 1943),
  ];

  getLivros(): LivroModel[] {
    return this.livros;
  }

  getLivroPorId(id: number): LivroModel | undefined {
    return this.livros.find((livro) => livro.id === id);
  }
}