"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HeaderComponent = void 0;
var core_1 = require("@angular/core");
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () { };
    HeaderComponent = __decorate([
        core_1.Component({
            selector: "app-header",
            template: "\n    <nav class=\"navbar is-dark\">\n      <!-- logo -->\n      <div class=\"navbar-brand\">\n        <a class=\"navbar-item\">\n          <img src=\"assets/img/angular-logo.png\" />\n        </a>\n      </div>\n\n      <!-- menu -->\n      <div class=\"navbar-menu\">\n        <div class=\"navbar-start\">\n          <a class=\"navbar-item\" routerLink=\"/\">Home</a>\n          <a class=\"navbar-item\" routerLink=\"/contact\">Contact</a>\n          <a class=\"navbar-item\" routerLink=\"/users\">Users</a>\n        </div>\n      </div>\n    </nav>\n  ",
            styles: []
        })
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
