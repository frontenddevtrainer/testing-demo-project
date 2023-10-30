import { Component, Input } from '@angular/core';
import { Link } from 'src/app/interfaces/Link';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {

  showMenu: boolean = false;

  @Input() heading: string = 'Application Header';
  @Input() links: Link[] = [];
}
