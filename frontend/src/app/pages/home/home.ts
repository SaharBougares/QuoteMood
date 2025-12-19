import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Mood, Quote } from '../../models/quote';
import { QuotesService } from '../../services/quotes.service';
import { QuoteCard } from '../../components/quote-card/quote-card';

@Component({
  selector: 'app-home',
  standalone:true,
  imports: [CommonModule, QuoteCard],
  templateUrl: './home.html',
  styleUrl: './home.css',
})


export class Home {
  mood: Mood = 'motivation';
  quote?: Quote;
  loading = false;
  error = '';

  constructor(private quotes: QuotesService) {}

  generate() {
    this.loading = true;
    this.error = '';
    this.quotes.getQuote(this.mood).subscribe({
      next: q => { this.quote = q; this.loading = false; },
      error: _ => { this.error = 'Erreur API'; this.loading = false; }
    });
  }
}
