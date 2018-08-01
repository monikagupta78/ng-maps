import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AgmCoreModule } from "@agm/core";
import { AgmDirectionModule } from "agm-direction"; // agm-direction
import { RouteService } from "./route.service";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from ".//app-routing.module";
import { DirectionsComponent } from "./directions/directions.component";

@NgModule({
  declarations: [AppComponent, DirectionsComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyAu3az3Bk6vtVk-djXczBkQugZ8UaKQpuI"
    }),
    AgmDirectionModule, // agm-direction
    AppRoutingModule
  ],
  providers: [RouteService],
  bootstrap: [AppComponent]
})
export class AppModule {}
