import { Component, OnInit } from '@angular/core';
import { ProfessionalSkillsService } from '../../service/professional-skills.service';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-professional-skills',
  standalone: true,
  imports: [NgFor],
  templateUrl: './professional-skills.component.html',
  styleUrl: './professional-skills.component.css'
})
export class ProfessionalSkillsComponent implements OnInit{
 public skills: any[];
 constructor(private skillService: ProfessionalSkillsService){
  this.skills = this.skillService.skillsData;
 }

 ngOnInit(): void {
   this.skills = this.skillService.skillsData;
 }

}
