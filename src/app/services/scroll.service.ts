// scroll.service.ts
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  private scrollSubject = new Subject<string>();

  scrollTo(section: string) {
    this.scrollSubject.next(section);
  }

  getScrollObservable() {
    return this.scrollSubject.asObservable();
  }
}
