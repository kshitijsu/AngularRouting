import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { UsersService } from "../Services/users.service";

@Component({
  selector: "app-user-details",
  templateUrl: "./user-details.component.html",
  styleUrls: ["./user-details.component.css"],
})
export class UserDetailsComponent implements OnInit {
  id: number;
  name: string;
  constructor(
    private route: ActivatedRoute,
    private userService: UsersService
  ) {}

  ngOnInit() {
    console.log(this.route);
    this.id = this.route.snapshot.params["id"];
    // this.name = this.route.snapshot.params["name"];
    this.userService.getUser(this.id).subscribe((user) => {
      console.log(user);
    });
  }
}
