import { Injectable } from '@angular/core';
import { LivroModel } from '../components/models/livro.model';


@Injectable({
  providedIn: 'root',
})
export class LivroService {
  private livros: LivroModel[] = [
    new LivroModel(1, 'O Senhor dos Anéis', 'J.R.R. Tolkien', 1954),
    new LivroModel(2, '1984', 'George Orwell', 1949),
    new LivroModel(3, 'O Pequeno Príncipe', 'Antoine de Saint-Exupéry', 1943),
  ];

  // Backend: conectar com um endpoint da API
  // /livros -> requisição HTTP GET

  // Armazenamento no browser: LocalStorage e SessionStorage
  // Ex.: dados de login

  getLivros(): LivroModel[] {
    return this.livros;
  }

  getLivroPorId(id: number): LivroModel | undefined {
    return this.livros.find((livro) => livro.id === id);
  }

  // Função para cadastrar livro
  cadastrarLivro() {
    // Pegar e validar as informações do usuário, 
    // gerar um objeto LivroModel e inserir na lista
    const titulo = prompt("Digite o título do novo livro:")
    if (titulo === null || titulo.trim() === '') {
      alert("Título está inválido!");
      return;
    }

    const autor = prompt("Digite o autor do novo livro:")
    if (autor === null || autor.trim() === '') {
      alert("Autor está inválido!");
      return;
    }

    const anoPublicacao = prompt("Digite o ano de publicação do novo livro:")
    if (anoPublicacao === null || anoPublicacao.trim() === '') {
      alert("Ano de Publicação está inválido!");
      return;
    }
    if (isNaN(Number(anoPublicacao))) {
      alert("Ano de publicação precisa ser um número!");
      return;
    }

    const novoLivro = new LivroModel(4, titulo, autor, Number(anoPublicacao))

    // Adicionar livro na lista
    this.livros.push(novoLivro);
  }

  // Função para excluir livro
  excluirLivro() {
    
  }
}