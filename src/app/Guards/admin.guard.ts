import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
import { UsersService } from "../Services/users.service";

@Injectable({
  providedIn: "root",
})
export class AdminGuard implements CanActivate {
  constructor(private userService: UsersService) {}
  canActivate(): boolean {
    // return true;
    if (this.userService.isAdmin()) {
      return true;
    } else {
      alert("You don't have admin access.");
    }
  }
}
