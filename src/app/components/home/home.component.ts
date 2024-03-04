// home.component.ts
import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ScrollService } from '../../services/scroll.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  private scrollSubscription: Subscription | undefined;

  constructor(private el: ElementRef, private scrollService: ScrollService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.scrollSubscription = this.scrollService.getScrollObservable().subscribe((section) => {
      this.scrollToSection(section);
    });

    // Écoutez les changements de fragment dans l'URL
    this.route.fragment.subscribe((fragment) => {
      if (fragment !== null) {
        this.scrollService.scrollTo(fragment);
      }
    });
  }

  ngOnDestroy(): void {
    if (this.scrollSubscription) {
      this.scrollSubscription.unsubscribe();
    }
  }

  scrollToSection(section: string): void {
    const element = this.el.nativeElement.querySelector(`#${section}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  }

}
