import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class TagsService {

  private subject = new Subject<any>();

  addTag(tag) {
    let tags: any = localStorage.getItem('tags');

    if (tags) {
      tags = JSON.parse(tags);
      tags.push(tag);
    } else {
      tags = [tag];
    }

    tags = JSON.stringify(tags);
    localStorage.setItem('tags', tags);

    const allTags = this.getAllTags();

    this.sendMessage(allTags);
  }

  deleteTag(tagId) {
    let tags = this.getAllTags();
    let filteredTags = tags.filter(tag => tag.id !== tagId);

    localStorage.setItem('tags', filteredTags);
    this.sendMessage(filteredTags);
  }

  getAllTags() {
    let tags;

    try {
      tags = JSON.parse(localStorage.getItem('tags'));
    } catch (error) {
      tags = [];
    }

    return tags ? tags : [];
  }

  sendMessage(allTags) {
    this.subject.next(allTags);
  }

  clearMessage() {
    this.subject.next();
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }
}
