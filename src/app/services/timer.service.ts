// timer.service.ts
import { Injectable } from '@angular/core';
import { timer } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class TimerService {
  constructor(private router: Router) {}

  navigateAfterDelay(delay: number, route: string): void {
    timer(delay).subscribe(() => {
      this.router.navigate([route]);
    });
  }
}
