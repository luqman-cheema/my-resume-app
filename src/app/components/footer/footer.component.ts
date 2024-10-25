import { Component } from '@angular/core';
import { SocialMediaService } from '../../service/social-media.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgFor],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  socialLinks: any[] = [];  

  constructor(private socialLinksService: SocialMediaService) {}

  ngOnInit(): void {
    this.socialLinksService.getSocialMedia().subscribe(links => {
      this.socialLinks = links;
    });
  }
}
