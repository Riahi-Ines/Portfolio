import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ErrorComponent } from './components/error/error.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'portfolio', component: PortfolioComponent},
  { path: 'error',component:ErrorComponent},
  { path: '', component: WelcomeComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '/error' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes ,
    { preloadingStrategy: PreloadAllModules }),
    RouterModule.forRoot([])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
