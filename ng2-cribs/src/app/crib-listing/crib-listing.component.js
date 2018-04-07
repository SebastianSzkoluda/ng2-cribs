"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var CribListingComponent = /** @class */ (function () {
    function CribListingComponent(http, cribsService, utilService) {
        this.http = http;
        this.cribsService = cribsService;
        this.utilService = utilService;
        this.sortField = 'price';
        this.sortDirection = 'asc';
        this.sortFields = [
            'address',
            'bathrooms',
            'bedrooms',
            'area',
            'price',
            'type'
        ];
    }
    CribListingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cribsService.getAllCribs()
            .subscribe(function (data) { return _this.cribs = data; }, function (error) { return _this.error = error.statusText; });
        this.cribsService.newCribSubject
            .subscribe(function (data) { return _this.cribs = [data].concat(_this.cribs); });
    };
    CribListingComponent = __decorate([
        core_1.Component({
            selector: 'app-crib-listing',
            templateUrl: './crib-listing.component.html',
            styleUrls: ['./crib-listing.component.css']
        })
    ], CribListingComponent);
    return CribListingComponent;
}());
exports.CribListingComponent = CribListingComponent;
