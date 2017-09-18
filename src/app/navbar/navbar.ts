import { Component, Output, EventEmitter } from '@angular/core';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import { Router, NavigationEnd, Event, RoutesRecognized } from '@angular/router';

const cssClassesMap = {
  '/application/notes': {
    cssClass: 'navbar--notes',
    title: 'Notes'
  },
  '/application/reminders': {
    cssClass: 'navbar--reminders',
    title: 'Reminders'
  },
  '/application/calendar': {
    cssClass: 'navbar--calendar',
    title: 'Calendar'
  },
  '/application/search': {
    cssClass: 'navbar--search',
    title: 'Search'
  },
  '/application/trash': {
    cssClass: 'navbar--trash',
    title: 'Trash'
  },
  '/application/archive': {
    cssClass: 'navbar--archive',
    title: 'Archive'
  }
};

@Component({
  selector: 'navbar',
  templateUrl: 'navbar.html',
  styleUrls: ['navbar.scss']
})
export class NavbarComponent {

  private cssClass: string;
  private searchBarClass: string;
  private title: string;
  private routeParams: any;

  @Output() onToggleClick = new EventEmitter<any>();

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events
      .filter((event) => event instanceof NavigationEnd || event instanceof RoutesRecognized)
      .subscribe((event:Event) => {
        if (event instanceof RoutesRecognized) {
          this.routeParams = event.state.root.firstChild.params;
        }

        if (event instanceof NavigationEnd) {
          this.setParams(event.url);
        }
      });

    this.setParams(this.router.url);
  }

  onSearchBarFocus() {
    this.router.navigate(['/application/search']);
  }

  setParams(url) {
    // TODO refactor because it causes too many bugs
    if (url === '/login' || url === '/application') {
      return;
    }

    this.searchBarClass = '';

    if (url !== '/') {
      this.title = 'My notes';
    }

    if (url.includes('tags')) {
      this.cssClass = 'navbar--tags';
      const tag = url.split('/').pop();
      this.title = `Tag: ${this.routeParams.name}`;
    } else if (url.includes('search')) {
      this.title = 'Search';
      this.cssClass = 'navbar--search';
      this.searchBarClass = 'navbar__search-bar--active';
    } else {
      this.cssClass = cssClassesMap[url].cssClass;
      this.title = cssClassesMap[url].title;
    }
  }

  toggle() {
    this.onToggleClick.emit();
  }

}
