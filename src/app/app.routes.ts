import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { CourseComponent } from './pages/course/course.component';
import { ToolsComponent } from './pages/tools/tools.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';

export const routes: Routes = [
    {path: '', component: LandingComponent, title: "Nätsmart"},
    {path: 'snabbkurser', component: CoursesComponent, title: "Nätsmart - Snabbkurser"},
    {path: 'om oss', component: AboutUsComponent, title: "Nätsmart - Om oss"},
    {path: 'verktyg', component: ToolsComponent, title: "Nätsmart - Verktyg"},

    {path:'snabbkurser/:name/:id', component: CourseComponent, title: "Nätsmart"},

    {path: '**', component: LandingComponent, title: "Nätsmart"}
];
