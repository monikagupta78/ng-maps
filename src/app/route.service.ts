import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class RouteService {
  constructor(private http: HttpClient) {}

  // private _url: string = "/assets/data/stops.json";
  private _url: string =
    "https://vtvnulb09g.execute-api.us-east-1.amazonaws.com/Dev/tsiicrouting";
  getOrigin() {
    return [{ lat: 12.9186331, lng: 77.6677502 }];
  }

  getDestination() {
    return [{ lat: 12.901655, lng: 77.7035018 }];
  }

  getStops_b() {
    return [
      {
        location: { lat: 12.9168343, lng: 77.6716284 }, //fire staion
        stopover: true
      },
      {
        location: { lat: 12.9129903, lng: 77.6809428 }, // - Lunch - Big Brewsky
        stopover: true
      }
    ];
  }

  getStops(): Observable<Object[]> {
    return this.http.get<Object[]>(this._url);
  }
}
