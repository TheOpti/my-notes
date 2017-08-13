import { Component } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';

import { TagsDialogComponent } from './tags-dialog/tags-dialog';

@Component({
  selector: 'sidenav-menu',
  templateUrl: 'sidenav-menu.html',
  styleUrls: ['sidenav-menu.scss']
})
export class SidenavMenuComponent {

  constructor(public dialog: MdDialog) {}

  openTagsDialog() {
    this.dialog.open(TagsDialogComponent);
  }

}
