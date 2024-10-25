import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [NgFor],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

  portfolioItems = [
    {
      image: 'portfolio1.jpg',
      title: 'Country-wide Complaint System',
      description: 'Developed and implemented a nationwide complaint system using C# and .NET, restructuring processes and automating tracking stages, resulting in a 60% improvement in complaint resolution times.'
    },
    {
      image: 'portfolio2.jpg',
      title: 'Digitization Management System',
      description: 'Designed and deployed a secure digital storage system for 20 years of organizational data, improving record retrieval times by 80%.'
    },

    {
      image: 'portfolio3.jpg',
      title: 'Delmonte Sales System',
      description: 'Developed & implemented sales portal for Delmonte Arabia (KSA & UAE) that streamlined the sales process, resulting in a 30% increase in sales efficiency.'
    }, 
    {
      image: 'portfolio4.jpg',
      title: 'News Management System',
      description: 'Developed & implemented newspaper system for 92 News HD to restructure news reporting and newspaper layout automation, which has improved the newspaper print delay by 40% and news content quality by 30%.'
    }
    
  ];
}
