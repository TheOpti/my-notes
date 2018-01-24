import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

import { BaseHttpClient } from './baseHttp.service';

@Injectable()
export class TagsService {

  private subject: Subject<any>;
  private tags: Array<any>;

  constructor(private baseHttpClient: BaseHttpClient) {
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
    this.baseHttpClient.post('http://localhost:3000/tag', tag)
      .subscribe(
        (data) => {
          console.log(data);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  updateTag(tag) {
    this.baseHttpClient.put('http://localhost:3000/tag/', tag)
      .subscribe(
        (data) => {
          console.log(data);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  deleteTag(tagId) {
    this.baseHttpClient.delete('http://localhost:3000/tag/' + tagId)
      .subscribe(
        (data) => {
          console.log(data);
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
