import { Component } from '@angular/core';
import { Router, NavigationEnd, Event} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.html',
  styleUrls: ['app.scss']
})
export class AppComponent {

  private canShowAddNoteComponent: boolean;

  constructor(private router: Router) {
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

}
