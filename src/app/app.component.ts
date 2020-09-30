import { Component } from "@angular/core";
import { NavigationEnd, NavigationStart, Router } from "@angular/router";
import { filter } from "rxjs/operators";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "Example1";

  constructor(private router: Router) {
    // To display all the navigation events
    router.events.subscribe((events) => console.log(events));

    // To filter particular/display navigation events
    router.events
      .pipe(filter((x) => x instanceof NavigationStart))
      .subscribe((events) => console.log(events));
  }
}
