import { UserService } from "./../../core/services/user.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-user-list",
  template: `
    <section class="section">
      <div class="container">
        <div class="columns is-multiline">
          <!-- loop over our users and give them each a card -->
          <div class="column is-4" *ngFor="let user of users | async">
            <div class="card">
              <div class="card-content">
                <a routerLink="/users/{{ user.login }}">{{ user.login }}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [],
})
export class UserListComponent implements OnInit {
  users;
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.users = this.userService.getUsers();
  }
}
