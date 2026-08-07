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
    // Lógica inversa (negação): queremos verificar se o autor
    // é um número. Caso sim, o alerta é exibido e o fluxo de 
    // cadastrar livro é interrompido
    if (!isNaN(Number(autor))) {
      alert("Autor não pode ser um número!");
      return;
    }
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

    const lista = localStorage.getItem('lista_livros');
    if(lista) {
      this.livros = JSON.parse(lista);
    }
    const novoId = this.livros.length + 1;

    const novoLivro = new LivroModel(novoId, titulo, autor, Number(anoPublicacao))

    // Adicionar livro na lista
    this.livros.push(novoLivro);
    
    // setItem recebe chave (string) e valor (string)
    localStorage.setItem("lista_livros", JSON.stringify(this.livros))
  }

  // Função para excluir livro
  excluirLivro(livroId: number) {
    // Retorna uma lista filtrada, com apenas os livros com Id diferente do recebido
    this.livros = this.livros.filter(livro => livro.id !== livroId);
    localStorage.setItem("lista_livros", JSON.stringify(this.livros));
  }
}