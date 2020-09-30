import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminPanelComponent } from "./admin-panel/admin-panel.component";
import { AdminGuard } from "./Guards/admin.guard";
import { HomeComponent } from "./home/home.component";
import { ItemDetailsComponent } from "./item-details/item-details.component";
import { ItemsComponent } from "./items/items.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { UserDetailsComponent } from "./user-details/user-details.component";
import { UsersComponent } from "./users/users.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "admin",
    component: AdminPanelComponent,
    canActivate: [AdminGuard],
  },
  {
    path: "items",
    component: ItemsComponent,
  },
  {
    path: "details/:id/:name/:status/:desc",
    component: ItemDetailsComponent,
  },
  {
    path: "users",
    component: UsersComponent,
  },
  {
    path: "user/:id",
    component: UserDetailsComponent,
  },
  {
    path: "**",
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
