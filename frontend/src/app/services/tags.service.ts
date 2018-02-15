import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

import { BaseHttpClient } from './baseHttp.service';
import { NotesService } from "./notes.service";

@Injectable()
export class TagsService {

  private subject: Subject<any>;
  private tags: Array<any>;

  constructor(private baseHttpClient: BaseHttpClient, private notesService: NotesService) {
    this.subject = new Subject<any>();
    this.tags = [];
  }

  getAllTags() {
    return this.tags;
  }

  setTags(tags) {
    this.tags = tags;
    this.sendMessage(this.tags);
  }

  addTag(tag) {
    this.baseHttpClient.post('http://localhost:3000/tag', { tag })
      .subscribe(
        (data: any) => {
          this.tags.push(data.tag);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  updateTag(tag) {
    this.baseHttpClient.put('http://localhost:3000/tag', { tag })
      .subscribe(
        () => {
          const updatedTags = this.tags.map(currentTag => {
            if (currentTag.id === tag.id) {
              currentTag.name = tag.name;
            }

            return currentTag;
          });

          this.tags = updatedTags;
        },
        (error) => {
          console.log(error);
        }
      );
  }

  deleteTag(tagId) {
    this.baseHttpClient.delete('http://localhost:3000/tag/' + tagId)
      .subscribe(
        () => {
          this.tags = this.tags.filter(tag => tag.id !== tagId);
          this.notesService.deleteTagsFromNotes(tagId);
          this.sendMessage(this.tags);
        },
        (error) => {
          console.log(error);
        }
      );
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
