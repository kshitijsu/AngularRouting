import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ItemsComponent } from "./items/items.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { HomeComponent } from "./home/home.component";
import { ItemDetailsComponent } from "./item-details/item-details.component";
import { UsersService } from "./Services/users.service";
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    PageNotFoundComponent,
    HomeComponent,
    ItemDetailsComponent,
    UsersComponent,
    UserDetailsComponent,
    AdminPanelComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [UsersService],
  bootstrap: [AppComponent],
})
export class AppModule {}
