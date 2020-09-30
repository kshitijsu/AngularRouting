import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-items",
  templateUrl: "./items.component.html",
  styleUrls: ["./items.component.css"],
})
export class ItemsComponent implements OnInit {
  itemList = [
    {
      id: 2,
      name: "Ball",
      status: "Unavailable",
      desc: "Made up of rubber",
    },
    {
      id: 4,
      name: "Book",
      status: "Available",
      desc: "Hard-Cover",
    },
    {
      id: 5,
      name: "Phone",
      status: "Available",
      desc: "From Samsung",
    },
  ];
  constructor() {}

  ngOnInit() {}
}
