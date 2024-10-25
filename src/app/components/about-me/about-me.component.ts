import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {

  public obj: any;
  constructor(){
    this.obj = {
     
      age: 33,
      email: 'luqmancheema.net@gmail.com',
      phone: '647-505-0837',
      address: '8 Domenico Cress, Brampton, Ontario, Canada',
      languages: ['English', 'Urdu'],
      description: `Results-driven Full Stack Developer with 8 years of experience, proficient in designing, developing & implementing scalable software solutions, managing databases, implementing design patterns, data migrations and digitalization, for public & private sector with a strong focus on achieving company goal. 
Skilled in programming languages such as SQL, .NET, JavaScript, Xamarin 
Developed & configured database systems in both Relational Databases & NoSQL Databases 
Possess strong problem solving, multi-tasking skills, experienced in Agile & Scrum methodologies
Developed solutions for Govt sector/public sector, News & TV Industry, Education sector, Financial divisions  
`

    };
  }

 

}
