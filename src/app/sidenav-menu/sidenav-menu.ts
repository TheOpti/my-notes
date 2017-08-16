import { Component } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';

import { TagsDialogComponent } from './tags-dialog/tags-dialog';

import {TagsService} from '../services/tags.service';

@Component({
  selector: 'sidenav-menu',
  templateUrl: 'sidenav-menu.html',
  styleUrls: ['sidenav-menu.scss']
})
export class SidenavMenuComponent {

  private tags;

  constructor(public dialog: MdDialog, private tagsService: TagsService) {}

  ngOnInit() {
    this.tags = this.tagsService.getAllTags();

    console.log('this.tags', this.tags);
    console.log('typeof this.tags', typeof this.tags);
  }

  openTagsDialog() {
    this.dialog.open(TagsDialogComponent);
  }

}
