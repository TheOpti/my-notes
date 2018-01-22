import { Component, Output, EventEmitter } from '@angular/core';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from "../../services/auth.service";

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
  private searchTerm: string;

  @Output() onToggleClick = new EventEmitter<any>();

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.router.events
      .filter((event) =>  event instanceof NavigationEnd)
      .filter((event: any) =>  event.url.includes('/application/'))
      .subscribe((event) => {
        this.setParams(event.url);
      });

    this.setParams(this.router.url);
  }

  onSearchBarFocus() {
    this.router.navigate(['/application/search']);
  }

  setParams(url) {
    this.searchBarClass = '';
    if (url.includes('tags')) {
      this.cssClass = 'navbar--tags';
      const tagName = decodeURI(url.split('/').pop());
      this.title = `Tag: ${tagName}`;
    } else if (url.includes('search')) {
      this.title = 'Search';
      this.cssClass = 'navbar--search';
      this.searchBarClass = 'navbar__search-bar--active';
    } else {
      this.cssClass = cssClassesMap[url].cssClass;
      this.title = cssClassesMap[url].title;
    }
  }

  clearInput() {
    console.log('clearInput');
    this.searchTerm = '';
  }

  toggle() {
    this.onToggleClick.emit();
  }

  logout() {
    this.authService.logout();
  }

}
