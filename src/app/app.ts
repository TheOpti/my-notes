import { Component, ViewChild, ElementRef, Renderer2} from '@angular/core';
import { Router, NavigationEnd, Event} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.html',
  styleUrls: ['app.scss']
})
export class AppComponent {

  private canShowAddNoteComponent: boolean;

  @ViewChild('sidenav', {read: ElementRef}) sidenav: ElementRef;
  @ViewChild('mainContent') mainContent: ElementRef;

  constructor(private router: Router, private rd: Renderer2) {
    this.canShowAddNoteComponent = true;
  }

  ngOnInit() {
    this.router.events
      .filter((event) => event instanceof NavigationEnd)
      .subscribe((event:Event) => {
        if (event instanceof NavigationEnd) {
          this.checkCanShowAddNote(event.url);
        }
      });
  }

  checkCanShowAddNote(url) {
    if (url.includes('tag') || url === '/notes' || url === '/reminders' || url === '/') {
      this.canShowAddNoteComponent = true;
    } else {
      this.canShowAddNoteComponent = false;
    }
  }

  toggleSidenavClass() {
    this.sidenav.nativeElement.classList.toggle("app__sidenav--opened");
    this.sidenav.nativeElement.classList.toggle("app__sidenav--closed");

    this.mainContent.nativeElement.classList.toggle("app__main-content--full");
    this.mainContent.nativeElement.classList.toggle("app__main-content--partial");
  }

}
