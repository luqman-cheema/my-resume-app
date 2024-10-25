import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [NgFor],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  public educations:
  any[] = [
     {
       title: 'Full Stack .NET Cloud Program',
       company: 'HUMBER COLLEGE',
       startDate: 'MAY 2024',
       endDate: 'OCT 2024',
       description: 'Humber offers a specialized bridging program for internationally trained IT professionals with education and experience in computer programming and software development. This program is designed to provide participants with the advanced concepts, skills, and knowledge required to work as Software Developers. Not only will you acquire and develop technical skills, but also communication and interpersonal skills being sought after by employers in this field.'
     },

     {
      title: 'Masters of Information Technology',
      company: 'SUPERIOR UNIVERSITY',
      startDate: 'FEB 2014',
      endDate: 'FEB 2016',
      description: 'Superior offers a specialized program for IT professionals with education and experience in computer programming and software development. This program is designed to provide participants with the advanced concepts, skills, and knowledge required to work as Software Developers. Not only will you acquire and develop technical skills, but also communication and interpersonal skills being sought after by employers in this field.'
    },

     
   ];
}
