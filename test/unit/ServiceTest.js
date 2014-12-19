/**
 * Created by vaibhavid on 18-12-2014.
 */
'use strict';
describe('factory: DataService', function() {
    var dataServ, $httpBackend,$rootScope,Collegelist;

    //get CollegeApp
    beforeEach(module('CollegeApp'));

    //inject service
    beforeEach(inject(function($injector) {
        $httpBackend = $injector.get('$httpBackend');
        $rootScope = $injector.get('$rootScope');
        dataServ = $injector.get('DataService');
    }));

    //To test whether service is returning success responce or not and check data length returned
    it('should send a request to fetch data', function () {
        $httpBackend.expect('GET', '/data/data1.json').respond(200, 'success');
        this.Collegelist = dataServ.Collegequery;

       expect(this.Collegelist.length).toBeGreaterThan(1);
    });
});


describe('factory: HeaderService', function() {
    var dataServ, $httpBackend,$rootScope,Collegelist,Headerlist;

    //get CollegeApp
    beforeEach(module('CollegeApp'));

    //inject service
    beforeEach(inject(function($injector) {
        $httpBackend = $injector.get('$httpBackend');
        $rootScope = $injector.get('$rootScope');
        dataServ = $injector.get('HeaderService');
    }));

    //To test whether service is returning success responce or not and check data length returned
    it('should send a request to fetch data', function () {
        $httpBackend.expect('GET', 'data/Header.json').respond(200, 'success');
        this.Headerlist = dataServ.Headerquery;

        expect(this.Headerlist.length).toBeGreaterThan(1);
    });
});

describe('factory: CollegeService', function() {
    var CollegeService, $httpBackend,$rootScope,Collegelist,Headerlist;

    //get CollegeApp
    beforeEach(module('CollegeApp'));

    //inject service
    beforeEach(inject(function($injector) {
        $httpBackend = $injector.get('$httpBackend');
        $rootScope = $injector.get('$rootScope');
        CollegeService = $injector.get('CollegeService');
    }));

    // check to see if it has the expected function
    it('should have an list function', function () {
        expect(angular.isFunction(CollegeService.list)).toBe(true);
    });

    // check to see if it has the expected function
    it('should have an toggleSelection function', function () {
        expect(angular.isFunction(CollegeService.toggleSelection)).toBe(true);
    });

    // check to see if it does what it's supposed to do.
    it('should make text exciting', function (){
        var result = [];
         result = CollegeService.list();
        expect(result).not.toBeNull();

    });
});