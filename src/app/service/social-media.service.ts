import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocialMediaService {

  constructor() {}

  getSocialMedia(): Observable<any[]> {
    const links = [
      { name: 'Twitter', url: 'https://x.com/luqmancheema_', icon: 'fab fa-twitter' },
      { name: 'LinkedIn', url: 'https://www.linkedin.com/in/luqman-cheema/', icon: 'fab fa-linkedin-in' },
      { name: 'GitHub', url: 'https://github.com/luqmancheemaa', icon: 'fab fa-github' }
    ];
    return of(links); 
  }
}
