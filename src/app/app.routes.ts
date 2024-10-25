import { Routes } from '@angular/router';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { EducationComponent } from './components/education/education.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ProfessionalSkillsComponent } from './components/professional-skills/professional-skills.component';
import { WorkExperienceComponent } from './components/work-experience/work-experience.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
export const routes: Routes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
{path: 'about', component: AboutMeComponent},
{path: 'contact', component: ContactMeComponent},
{path: 'education', component: EducationComponent},
{path: 'portfolio', component: PortfolioComponent},
{path: 'skills', component: ProfessionalSkillsComponent},
{path: 'work', component: WorkExperienceComponent},
{path: '**', component: PageNotFoundComponent}

];
