import { Component, OnInit} from '@angular/core';
import { ActiveLinkService } from '../../services/active-link.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  activeLinkIndex: number | null = null;

  constructor(private activeLinkService: ActiveLinkService, private router: Router)
   {}
   scrollToSection(section: string) {
    this.router.navigate(['/home'], { fragment: section });
  }
  ngOnInit(): void {
    // Charger l'index actif depuis le service ou le localStorage lors de l'initialisation du composant
    this.activeLinkIndex = this.activeLinkService.getActiveLinkIndex();
  }

  setActiveLink(index: number): void {
    // Enregistrer l'index actif dans le service et dans le localStorage
    this.activeLinkService.setActiveLinkIndex(index);

    // Mettre à jour l'index actif dans le composant
    this.activeLinkIndex = index;
  }

}
