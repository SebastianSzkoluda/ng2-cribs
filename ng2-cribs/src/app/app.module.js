"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var crib_listing_component_1 = require("./crib-listing/crib-listing.component");
var crib_card_component_1 = require("./crib-card/crib-card.component");
var cribs_service_1 = require("./services/cribs.service");
var add_listing_form_component_1 = require("./add-listing-form/add-listing-form.component");
var util_service_1 = require("./services/util.service");
var sort_by_pipe_1 = require("./pipes/sort-by.pipe");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                crib_listing_component_1.CribListingComponent,
                crib_card_component_1.CribCardComponent,
                add_listing_form_component_1.AddListingFormComponent,
                sort_by_pipe_1.SortByPipe
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule
            ],
            providers: [
                cribs_service_1.CribsService,
                util_service_1.UtilService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
