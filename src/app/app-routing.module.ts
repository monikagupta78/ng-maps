import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, CanActivate } from "@angular/router";
import { AppComponent } from "./app.component";
import { AuthGuardService as AuthGuard } from "./auth-guard.service";
import { DirectionsComponent } from "./directions/directions.component";

export const ROUTES: Routes = [
  {
    path: "",
    component: AppComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "directions",
    component: DirectionsComponent,
    canActivate: [AuthGuard]
  },
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [CommonModule],
  declarations: []
})
export class AppRoutingModule {}
