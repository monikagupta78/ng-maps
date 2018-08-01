import { Component, OnInit } from "@angular/core";
// require the plugin
import { Directions } from "nativescript-directions";

@Component({
  selector: "app-directions",
  templateUrl: "./directions.component.html",
  styleUrls: ["./directions.component.css"]
})
export class DirectionsComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    // instantiate the plugin
    let directions = new Directions();
    directions.available().then(avail => {
    console.log(avail ? "Yes" : "No");
     });
  }
}
