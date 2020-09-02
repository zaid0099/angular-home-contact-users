"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserListComponent = void 0;
var core_1 = require("@angular/core");
var UserListComponent = /** @class */ (function () {
    function UserListComponent(userService) {
        this.userService = userService;
    }
    UserListComponent.prototype.ngOnInit = function () {
        this.users = this.userService.getUsers();
    };
    UserListComponent = __decorate([
        core_1.Component({
            selector: "app-user-list",
            template: "\n    <section class=\"section\">\n      <div class=\"container\">\n        <div class=\"columns is-multiline\">\n          <!-- loop over our users and give them each a card -->\n          <div class=\"column is-4\" *ngFor=\"let user of users | async\">\n            <div class=\"card\">\n              <div class=\"card-content\">\n                <a routerLink=\"/users/{{ user.login }}\">{{ user.login }}</a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n  ",
            styles: []
        })
    ], UserListComponent);
    return UserListComponent;
}());
exports.UserListComponent = UserListComponent;
