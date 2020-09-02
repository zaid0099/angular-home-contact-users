import { ContactComponent } from "./contact/contact.component";
import { HomeComponent } from "./home/home.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    pathMatch: "full",
  },
  {
    path: "contact",
    component: ContactComponent,
  },
  {
    path: "users",
    loadChildren: () =>
      import("./users/users.module").then((m) => m.UsersModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
