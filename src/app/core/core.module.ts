import { RouterModule } from "@angular/router";
import { UserService } from "./services/user.service";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  exports: [HeaderComponent, FooterComponent],
  providers: [UserService],

  imports: [CommonModule, RouterModule],
})
export class CoreModule {}
