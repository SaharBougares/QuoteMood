import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mood, Quote } from '../models/quote';

@Injectable({ providedIn: 'root' })
export class QuotesService {
  constructor(private http: HttpClient) {}
  getQuote(mood: Mood): Observable<Quote> {
    return this.http.get<Quote>(`/api/quote?mood=${mood}`);
  }
}
