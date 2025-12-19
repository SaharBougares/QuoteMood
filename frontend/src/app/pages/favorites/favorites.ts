import { Component } from '@angular/core';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FavoritesService } from '../../services/favorites.service';
import { Quote } from '../../models/quote';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [NgIf, NgFor, AsyncPipe, RouterLink],
  templateUrl: './favorites.html',
  styleUrls: ['./favorites.css']
})
export class FavoritesComponent {
  constructor(public fav: FavoritesService) {}
  remove(q: Quote) { this.fav.remove(q); }
  get favorites$() { return this.fav.favorites$; }
}
