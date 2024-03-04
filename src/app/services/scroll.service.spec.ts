// scroll.service.ts
import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subject } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  private scrollSubject = new Subject<string>();

  constructor(private router: Router) {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((event) => {
      const urlTree = this.router.parseUrl(this.router.url);
      const fragment = urlTree.fragment || '';
      this.scrollSubject.next(fragment);
    });
  }

  scrollTo(section: string) {
    this.scrollSubject.next(section);
  }

  getScrollObservable() {
    return this.scrollSubject.asObservable();
  }
}
