import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Subscription } from 'rxjs/Subscription';

import { TagsService} from '../../../services/tags.service';

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

    this.subscription = this.tagsService.getMessage().subscribe(tags => {
      this.tags = tags;
    });
  }

  trackByFn(idx, tag) {
    return tag.name;
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
    const newTag = { name: tag };

    this.tagsService.addTag(newTag);
    this.disableAddingNew();
  }

  updateTag(newTagName, tag) {
    if (newTagName !== tag.name) {
      this.tagsService.updateTag({id: tag.id, name: newTagName});
    }
    this.disableEditingTagById();
  }

  deleteTag(tagId) {
    this.tagsService.deleteTag(tagId);
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
