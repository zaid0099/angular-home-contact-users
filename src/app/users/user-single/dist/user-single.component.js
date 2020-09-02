"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserSingleComponent = void 0;
var core_1 = require("@angular/core");
var UserSingleComponent = /** @class */ (function () {
    function UserSingleComponent(userService, route) {
        this.userService = userService;
        this.route = route;
    }
    UserSingleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var username = params['username'];
            _this.userService.getUser(username).subscribe(function (user) {
                _this.user = user;
            });
        });
    };
    UserSingleComponent = __decorate([
        core_1.Component({
            selector: 'app-user-single',
            template: "\n    <section class=\"section\">\n      <div class=\"container\">\n        <div class=\"card\" *ngIf=\"user\">\n          <img [src]=\"user.avatar_url\" />\n          <h2>{{ user.login }}</h2>\n        </div>\n      </div>\n    </section>\n  ",
            styles: []
        })
    ], UserSingleComponent);
    return UserSingleComponent;
}());
exports.UserSingleComponent = UserSingleComponent;
// getProfile(name: string) {
//   this.userService.getUser(name).subscribe((user) => {
//     this.user = user;
//   });
// }
