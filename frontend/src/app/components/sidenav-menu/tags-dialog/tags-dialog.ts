import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Subscription } from 'rxjs/Subscription';

import {TagsService} from '../../../services/tags.service';

import v1 from 'uuid/v1';

@Component({
  selector: 'tags-dialog',
  templateUrl: 'tags-dialog.html',
  styleUrls: ['tags-dialog.scss']
})
export class TagsDialogComponent {

  private tags: any;
  private isAddingNew: boolean;
  private currentEditingTag: string;
  private subscription: Subscription;

  constructor(public dialogRef: MatDialogRef<TagsDialogComponent>, private tagsService: TagsService) {
    this.isAddingNew = false;

    this.tags = this.tagsService.getAllTags();

    this.subscription = this.tagsService.getMessage().subscribe(notes => {
      this.tags = notes;
    });
  }

  enableAddingNew() {
    this.isAddingNew = true;
  }

  disableAddingNew() {
    this.isAddingNew = false;
  }

  enableEditingTagById(tagId) {
    this.currentEditingTag = tagId;
  }

  disableEditingTagById() {
    this.currentEditingTag = null;
  }

  createNewTag(tag) {
    const newTag = {
      id: v1(),
      name: tag
    };

    this.tagsService.addTag(newTag);
    this.disableAddingNew();
  }

  updateTag(tag, tagId) {
    console.log('tag, tagId', tag, tagId);

    this.tagsService.updateTag(tag, tagId);
    this.disableEditingTagById();
  }

  deleteTag(tagId) {
    this.tagsService.deleteTag(tagId);
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
