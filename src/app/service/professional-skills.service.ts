import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfessionalSkillsService {

  public skillsData = [
    
    { skill: 'C#', proficiency: 82 },
    { skill: 'SQL', proficiency: 85 },
    { skill: 'VB.NET', proficiency: 75 },
    { skill: 'JAVASCRIPT', proficiency: 80 },
    { skill: 'OOP', proficiency: 80 }
    
  ];
}
