// active-link.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ActiveLinkService {
  private activeLinkIndexKey = 'activeLinkIndex';

  getActiveLinkIndex(): number | null {
    if (typeof localStorage !== 'undefined') {
      const storedIndex = localStorage.getItem(this.activeLinkIndexKey);
      return storedIndex ? +storedIndex : null;
    } else {
      return null;
    }
  }

  setActiveLinkIndex(index: number): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(this.activeLinkIndexKey, index.toString());
    }
  }
}
