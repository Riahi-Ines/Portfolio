import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ines_portfolio';
  constructor(
    private translate: TranslateService,
  ) {
    //Language based on the user's browser language
    const userLang = navigator.language || 'en';
    const languageCode = userLang.split('-')[0];
    this.translate.setDefaultLang(languageCode);
    this.translate.use(languageCode);
  }

}
