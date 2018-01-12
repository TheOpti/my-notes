import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Subscription } from 'rxjs/Subscription';

import { TagsDialogComponent } from './tags-dialog/tags-dialog';

import {TagsService} from '../../services/tags.service';

@Component({
  selector: 'sidenav-menu',
  templateUrl: 'sidenav-menu.html',
  styleUrls: ['sidenav-menu.scss']
})
export class SidenavMenuComponent {

  private tags: any;
  private subscription: Subscription;

  constructor(public dialog: MatDialog, private tagsService: TagsService) {}

  ngOnInit() {
    this.tags = this.tagsService.getAllTags();

    this.subscription = this.tagsService.getMessage().subscribe(notes => {
      this.tags = notes;
    });
  }

  openTagsDialog() {
    this.dialog.open(TagsDialogComponent);
  }

}
