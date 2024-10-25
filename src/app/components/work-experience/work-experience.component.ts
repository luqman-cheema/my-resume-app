import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  standalone: true,
  imports: [NgFor],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.css'
})
export class WorkExperienceComponent {
  public workExperience:
  any[] = [
     {
       title: 'Senior Software Engineer',
       company: 'OMBUDSMAN PUNJAB',
       startDate: 'OCT 2018',
       endDate: 'MAR 2024',
       description: 'Coordinated with cross-functional teams & stakeholders for requirements gathering, deadlines and deliverables. Developed software application architecture adhering to design patterns, OOP & SOLID principles. Performed debugging and troubleshooting to ensure optimal performance and functionality. Contributed to the development of robust and scalable applications using ReactJS, C#, .NET, Azure Functions, and Azure CosmosDB. Developed & maintained PowerShell scripts, complex stored procedures, SQL functions, SQL views, SQL triggers for bulk and massive data transactions. Deep understanding of Azure cloud services, including Azure Functions, Azure CosmosDB, AKS, ADF, Logic Apps, Azure Event Hubs, APIM, and Front Door. Provided technical guidance and mentorship to team members, ensuring adherence to best practices and coding standards. Led and managed technical projects from inception to completion, including planning, execution, and delivery. '
 
     },

     {
      title: 'Software Engineer',
      company: 'SUPERIOR SOLUTIONS',
      startDate: 'FEB 2016',
      endDate: 'SEP 2018',
      description: 'Press Point ERP: Developed & implemented newspaper system for 92 News HD to restructure news reporting and newspaper layout automation, which has improved the newspaper print delay by 40% and news content quality by 30%. News Replication Service: Developed & integrated a real-time news & image replication app for the country-wide bureaus of 92 News HD. AFP Integration: Integrated AFP API (Agence France-Presse), a French international news agency, into Press Point ERP for covering international news reporting for 92 News HD.  Press Point Billing: Designed and implemented a comprehensive accounts software for 92 News HD, streamlining the advertising operations’ accounts, which has improved billing accuracy by 30%. Online Admissions System: Developed and integrated a robust admissions module for Superior University, which has improved the admission process time for student & admissions team by 30%. Admissions Data Migration: Migrated data from old student admission system databases such as Oracle 11g & MySQL to the new developed database in Microsoft SQL Server. Designed a layered architecture incorporating the Repository and Unit of Work patterns, enhancing code maintainability. Managed & configured production environment, deployed web applications, windows services & published desktop apps for various clients. ' 

    },

     {
       title: 'Associate Software Engineer',
       company: 'SCRIBILL PAY UAE',
       startDate: 'JUN 2015',
       endDate: 'JAN 2016',
       description: 'Delmonte Sales Portal: Developed & implemented sales portal for Delmonte Arabia (KSA & UAE) that streamlined the sales process, resulting in a 30% increase in sales efficiency. Delmonte Employee Portal: Developed & integrated Employee Portal to restructure the employee data and payroll, which has significantly enhanced data accuracy and decision making by 40%. Developed user interfaces (UI) as per the prototypes using Asp.NET MVC framework. Integrated Business Logic Layer (BLL), Data Access Layer (DAL) and Presentation Layer. Developed and executed unit tests using MSTest, ensuring robust and reliable code quality.' 
 
     },
   ];
}
