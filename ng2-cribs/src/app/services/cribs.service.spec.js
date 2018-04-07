"use strict";
/* tslint:disable:no-unused-variable */
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var cribs_service_1 = require("./cribs.service");
describe('CribsService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [cribs_service_1.CribsService]
        });
    });
    it('should ...', testing_1.inject([cribs_service_1.CribsService], function (service) {
        expect(service).toBeTruthy();
    }));
});
