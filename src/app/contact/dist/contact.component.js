"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ContactComponent = void 0;
var core_1 = require("@angular/core");
var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () { };
    ContactComponent.prototype.processForm = function () {
        var allInfo = "My name is " + this.name + ". My email is " + this.email + ". My message is " + this.message;
        alert(allInfo);
    };
    ContactComponent = __decorate([
        core_1.Component({
            selector: "app-contact",
            template: "\n    <section class=\"hero is-primary is-bold\">\n      <div class=\"hero-body\">\n        <div class=\"container\">\n          <h1 class=\"title\">Contact Us!</h1>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"section\">\n      <div class=\"container\">\n        <!-- form goes here -->\n        <form (ngSubmit)=\"processForm()\">\n          <!-- name -->\n          <div class=\"field\">\n            <input\n              type=\"text\"\n              name=\"name\"\n              class=\"input\"\n              placeholder=\"Your Name\"\n              [(ngModel)]=\"name\"\n              required\n              minlength=\"3\"\n              #nameInput=\"ngModel\"\n            />\n\n            <div\n              class=\"help is-error\"\n              *ngIf=\"nameInput.invalid && nameInput.dirty\"\n            >\n              Name is required and needs to be at least 3 characters long.\n            </div>\n          </div>\n\n          <!-- email -->\n          <div class=\"field\">\n            <input\n              type=\"email\"\n              name=\"email\"\n              class=\"input\"\n              placeholder=\"Your Email\"\n              [(ngModel)]=\"email\"\n              required\n              email\n              #emailInput=\"ngModel\"\n            />\n\n            <div\n              class=\"help is-error\"\n              *ngIf=\"emailInput.invalid && emailInput.dirty\"\n            >\n              Needs to be a valid email.\n            </div>\n          </div>\n\n          <!-- message -->\n          <div class=\"field\">\n            <textarea\n              class=\"textarea\"\n              name=\"message\"\n              placeholder=\"What's on your mind?\"\n              [(ngModel)]=\"message\"\n              required\n              #messageInput=\"ngModel\"\n            ></textarea>\n\n            <div\n              class=\"help is-error\"\n              *ngIf=\"emailInput.invalid && emailInput.dirty\"\n            >\n              Your message is required!\n            </div>\n          </div>\n\n          <button type=\"submit\" class=\"button is-danger is-large\">\n            Submit\n          </button>\n        </form>\n      </div>\n    </section>\n  ",
            styles: []
        })
    ], ContactComponent);
    return ContactComponent;
}());
exports.ContactComponent = ContactComponent;
