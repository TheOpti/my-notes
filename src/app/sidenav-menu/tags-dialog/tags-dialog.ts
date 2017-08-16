import {Component} from '@angular/core';
import {MdDialogRef} from '@angular/material';

import {TagsService} from '../../services/tags.service';

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

  constructor(public dialogRef: MdDialogRef<TagsDialogComponent>, private tagsService: TagsService) {
    this.isAddingNew = false;
  }

  ngOnInit() {
    this.tags = this.tagsService.getAllTags();
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

    this.tags = this.tagsService.getAllTags();
    this.disableAddingNew();
  }

  updateTag(tag, tagId) {
    console.log('tag, tagId', tag, tagId);

    this.tagsService.updateTag(tag, tagId);

    this.tags = this.tagsService.getAllTags();
    this.disableEditingTagById();
  }

  deleteTag(tagId) {
    this.tagsService.deleteTag(tagId);
    this.tags = this.tagsService.getAllTags();
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
