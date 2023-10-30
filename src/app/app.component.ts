import { Component } from '@angular/core';
import { Link } from './interfaces/Link';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'testing-demo-project';

  links: Link[] = [
    { link: '/profile', title: 'Profile' },
    { link: '/dashboard', title: 'Dashboard' },
  ];
}
