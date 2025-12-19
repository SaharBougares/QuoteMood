
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Quote } from '../../models/quote';
import { FavoritesService } from '../../services/favorites.service';

@Component({
  selector: 'app-quote-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quote-card.html',
  styleUrl: './quote-card.css',
})

export class QuoteCard {
  @Input() quote?: Quote;

  constructor(private fav: FavoritesService) {}

  copy() {
    if (!this.quote) return;
    navigator.clipboard.writeText(`"${this.quote.text}" — ${this.quote.author}`);
  }

  save() {
    if (!this.quote) return;
    this.fav.add(this.quote);
  }
}
