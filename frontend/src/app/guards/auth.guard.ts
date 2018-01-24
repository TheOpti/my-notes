import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { UserService } from '../services/user.service';
import { TagsService } from '../services/tags.service';

@Injectable()
export class AlwaysAuthGuard implements CanActivate {

  constructor(private userService: UserService, private tagsService: TagsService) { }

  canActivate() {
    this.userService.getUserData()
      .subscribe(
        (data: any) => {
          const { notes, tags } = data.user;

          this.tagsService.setTags(tags);
        },
        (err) => {
          console.log(err);
        }
      );

    return true;
  }

}
