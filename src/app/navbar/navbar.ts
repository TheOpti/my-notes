import { Component, Input } from '@angular/core';
import { MdSidenav } from '@angular/material';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import { Router, NavigationEnd, ActivatedRoute, Event } from '@angular/router';

const cssClassesMap = {
  '/notes': {
    cssClass: 'navbar--notes',
    title: 'Notes'
  },
  '/reminders': {
    cssClass: 'navbar--reminders',
    title: 'Reminders'
  },
  '/search': {
    cssClass: 'navbar--search',
    title: 'Search'
  },
  '/trash': {
    cssClass: 'navbar--trash',
    title: 'Trash'
  },
  '/archive': {
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
  private title: string;

  @Input() sidenav: MdSidenav;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.router.events
      .filter((event) => event instanceof NavigationEnd)
      .subscribe((event:Event) => {
        if (event instanceof NavigationEnd) {
          this.setParams(event.url);
        }
      });
  }

  setParams(url) {
    if (url.includes('tags')) {
      this.cssClass = 'navbar--tags';
      const tag = url.split('/').pop();
      this.title = `Tag: ${tag}`;
    } else {
      this.cssClass = cssClassesMap[url].cssClass;
      this.title = cssClassesMap[url].title;
    }
  }

  toggle() {
    this.sidenav.toggle();
  }

}
