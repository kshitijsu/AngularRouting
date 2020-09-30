import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-item-details",
  templateUrl: "./item-details.component.html",
  styleUrls: ["./item-details.component.css"],
})
export class ItemDetailsComponent implements OnInit {
  itemId: number;
  itemName: string = "";
  itemStatus: string = "";
  itemDesc: string = "";

  constructor(private router: ActivatedRoute) {}

  ngOnInit() {
    console.log(this.router.snapshot.params);
    this.itemId = this.router.snapshot.params.id;
    this.itemName = this.router.snapshot.params["name"];
    this.itemStatus = this.router.snapshot.params["status"];
    this.itemDesc = this.router.snapshot.params["desc"];
  }
}
