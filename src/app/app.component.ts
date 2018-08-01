import { Component } from "@angular/core";
import { RouteService } from "./route.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title: string = "Unit 1 Route";

  // public lat: number = 12.9086896;
  // public lng: number = 77.6532827;

  public origin: {};
  public destination: {};

  constructor(private _routeservice: RouteService) {}
  public waypoints = [];
  public waypointsApi = [];

  ngOnInit() {
    this.getDirection(this._routeservice);
    // get stops
    this._routeservice.getStops().subscribe(data => (this.waypointsApi = data));
  }

  getDirection(_routeservice) {
    this.origin = { lat: 17.5243172, lng: 78.4446025 };
    this.destination = { lat: 17.5301186, lng: 78.4415813 };
    // this.origin = _routeservice.getOrigin();
    // this.destination = _routeservice.getDestination();
  }

  public renderOptions = {
    suppressMarkers: false
  };

  public markerOptions = {
    origin: {
      draggable: false
    },
    destination: {
      opacity: 0.8
    }
  };

  public change(event: any) {
    this.waypoints = event.request.waypoints;
  }
}
