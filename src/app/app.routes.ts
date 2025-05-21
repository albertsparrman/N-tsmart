import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { ArticlesComponent } from './pages/articles/articles.component';
import { CoursesComponent } from './pages/courses/courses.component';

export const routes: Routes = [
    {path: '', component: LandingComponent, title: "Nätsmart"},
    {path: 'snabbkurser', component: CoursesComponent, title: "Nätsmart - Snabbkurser"},
    {path: 'artiklar', component: ArticlesComponent, title: "Nätsmart - Artiklar"},
    {path: 'verktyg', component: ArticlesComponent, title: "Nätsmart - Verktyg"}
];
