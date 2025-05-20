import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { ArticlesComponent } from './pages/articles/articles.component';

export const routes: Routes = [
    {path: '', component: LandingComponent},
    {path: 'articles', component: ArticlesComponent}
];
