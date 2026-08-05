import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { LivroModel } from '../models/livro.model';
import { LivroService } from '../../services/livro-service';

@Component({
  selector: 'app-livro-detalhes-page',
  imports: [RouterLink],
  templateUrl: './livro-detalhes-page.html',
  styleUrl: './livro-detalhes-page.css',
})
export class LivroDetalhesPage implements OnInit {
  livro?: LivroModel;

  constructor(
    private route: ActivatedRoute,
    private livroService: LivroService
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = Number(idParam);

    if (!idParam || isNaN(id)) {
      this.livro = undefined;
      return;
    }

    this.livro = this.livroService.getLivroPorId(id);
  }
}