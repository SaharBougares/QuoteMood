import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Quote } from '../models/quote';

const KEY = 'quotemood_favorites_v1';

function readStorage(): Quote[] {
  try { return JSON.parse(localStorage.getItem(KEY) || '[]'); }
  catch { return []; }
}

@Injectable({ providedIn: 'root' })
export class FavoritesService {
  private subject = new BehaviorSubject<Quote[]>(readStorage());
  favorites$ = this.subject.asObservable();

  private save(list: Quote[]) {
    localStorage.setItem(KEY, JSON.stringify(list));
    this.subject.next(list);
  }

  add(q: Quote) {
    const list = readStorage();
    const exists = list.some(x => x.text === q.text && x.author === q.author);
    if (!exists) this.save([q, ...list]);
  }

  remove(q: Quote) {
    const list = readStorage().filter(x => !(x.text === q.text && x.author === q.author));
    this.save(list);
  }
}
