import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ProfessionalSkillsComponent } from './components/professional-skills/professional-skills.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { WorkExperienceComponent } from './components/work-experience/work-experience.component';
import { EducationComponent } from './components/education/education.component';
import { ProfessionalReferencesComponent } from './components/professional-references/professional-references.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, AboutMeComponent, ProfessionalSkillsComponent
    , PortfolioComponent, WorkExperienceComponent, EducationComponent, 
    ProfessionalReferencesComponent, ContactMeComponent, FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'luqman-resume';

}

