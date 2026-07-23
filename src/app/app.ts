import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  public name: string = 'Iago';
  protected readonly title = signal(this.name);
}

// TypeScript adiciona comportamento ao JavaScript
