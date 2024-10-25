import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
 
  downloadCV() {
   const cvFilePath = 'Resume-Luqman-Cheema.pdf'; 
   const link = document.createElement('a');
   link.href = cvFilePath;
   link.download = 'Resume-Luqman-Cheema.pdf'; 
   link.click();
  }
}


