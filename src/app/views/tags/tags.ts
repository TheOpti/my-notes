import { Component } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'tags',
  templateUrl: 'tags.html',
  styleUrls: ['tags.scss']
})
export class TagsComponent {

  private tags : any;
  private tagName: string;
  private subscription: any;


  constructor(private route: ActivatedRoute) {
    this.tags = [];

    this.subscription = this.route.params.subscribe(params => {
      this.tagName = params['name'];
    });
  }

}
