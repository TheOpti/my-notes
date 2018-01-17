import { Injectable } from '@angular/core';
import { CanActivate } from "@angular/router";
import { UserService } from "../services/user.service";

@Injectable()
export class AlwaysAuthGuard implements CanActivate {

  constructor(private userService: UserService) { }

  canActivate() {
    this.userService.getUserData()
      .subscribe(
        (data) => {
          console.log(data);
        },
        (err) => {
          console.log(err);
        }
      );

    return true;
  }

}
