"use strict";
/* tslint:disable:no-unused-variable */
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var util_service_1 = require("./util.service");
describe('UtilService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [util_service_1.UtilService]
        });
    });
    it('should ...', testing_1.inject([util_service_1.UtilService], function (service) {
        expect(service).toBeTruthy();
    }));
});
