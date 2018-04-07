"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SortByPipe = /** @class */ (function () {
    function SortByPipe() {
    }
    SortByPipe.prototype.transform = function (array, args) {
        if (array) {
            var sortField_1 = args[0];
            var sortDirection = args[1];
            var modifier_1 = 1;
            if (sortDirection === 'desc') {
                modifier_1 = -1;
            }
            array.sort(function (a, b) {
                if (a[sortField_1] < b[sortField_1]) {
                    return -1 * modifier_1;
                }
                else if (a[sortField_1] > b[sortField_1]) {
                    return 1 * modifier_1;
                }
                else {
                    return 0;
                }
            });
            return array;
        }
    };
    SortByPipe = __decorate([
        core_1.Pipe({
            name: 'sortBy'
        })
    ], SortByPipe);
    return SortByPipe;
}());
exports.SortByPipe = SortByPipe;
