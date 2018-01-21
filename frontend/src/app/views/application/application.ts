import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'application',
  templateUrl: 'application.html',
  styleUrls: ['application.scss']
})
export class ApplicationComponent {

  @ViewChild('sidenav', {read: ElementRef}) sidenav: ElementRef;
  @ViewChild('mainContent') mainContent: ElementRef;

  toggleSidenavClass() {
    this.sidenav.nativeElement.classList.toggle("application__sidenav--opened");
    this.sidenav.nativeElement.classList.toggle("application__sidenav--closed");

    this.mainContent.nativeElement.classList.toggle("application__main-content--full");
    this.mainContent.nativeElement.classList.toggle("application__main-content--partial");
  }

}
