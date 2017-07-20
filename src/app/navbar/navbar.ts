import { Component, Input } from '@angular/core';
import { MdSidenav } from '@angular/material';

@Component({
  selector: 'navbar',
  templateUrl: 'navbar.html',
  styleUrls: ['navbar.scss']
})
export class NavbarComponent {

  @Input() sidenav: MdSidenav;

  toggle() {
    this.sidenav.toggle();
  }

}
