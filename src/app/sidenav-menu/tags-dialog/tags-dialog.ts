import {Component} from '@angular/core';
import {MdDialogRef} from '@angular/material';

@Component({
  selector: 'tags-dialog',
  templateUrl: 'tags-dialog.html',
  styleUrls: ['tags-dialog.scss']
})
export class TagsDialogComponent {

  private tags: any;
  private isAddingNew: boolean;
  private currentEditingTag: string;

  constructor(public dialogRef: MdDialogRef<TagsDialogComponent>) {
    this.tags = [
      {
        id: '1',
        name: 'school'
      },
      {
        id: '2',
        name: 'office'
      },
      {
        id: '3',
        name: 'top priority'
      }
    ];

    this.isAddingNew = false;
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
    console.log('createNewTag: ', tag);
    this.disableAddingNew()
  }

  editTag(tag, tagId) {
    console.log('editTag', tag, tagId);
    this.disableEditingTagById();
  }

  deleteTag(tagId) {
    console.log('delete tag');
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
