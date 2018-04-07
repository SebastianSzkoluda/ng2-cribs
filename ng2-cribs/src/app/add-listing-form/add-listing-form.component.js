"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AddListingFormComponent = /** @class */ (function () {
    function AddListingFormComponent(cribsService) {
        this.cribsService = cribsService;
        this.propertyTypes = ['House', 'Condo', 'Duplex'];
    }
    AddListingFormComponent.prototype.ngOnInit = function () {
    };
    AddListingFormComponent.prototype.onCribSubmit = function (data) {
        this.cribsService.addCrib(data);
        this.newCribForm.reset();
    };
    __decorate([
        core_1.ViewChild('newCribForm')
    ], AddListingFormComponent.prototype, "newCribForm", void 0);
    AddListingFormComponent = __decorate([
        core_1.Component({
            selector: 'app-add-listing-form',
            templateUrl: './add-listing-form.component.html',
            styleUrls: ['./add-listing-form.component.css']
        })
    ], AddListingFormComponent);
    return AddListingFormComponent;
}());
exports.AddListingFormComponent = AddListingFormComponent;
