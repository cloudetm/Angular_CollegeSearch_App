//Main module Js - CollegeApp
//Which we put in index.html as ng-app on line2
var varApp = angular.module('CollegeApp',['ngRoute','controllerApp',
    'ui.bootstrap','multi-select']);


varApp.config(['$routeProvider',
    function($routeProvider){
        $routeProvider.
            when('/login', {
                templateUrl: 'partials/Login.html', //login page if user wants to loign
                controller: 'LoginController'
            }).
            when('/welcome',{
            templateUrl:'partials/CollegeTable.html', //page displaying list of colleges inn table format
            controller:'CollegeController'
        }).
            when('/showDetails',{
                templateUrl:'partials/college-detail.html', //page displaying list of selected colleges
                controller:'CollegeController'
            }).
            when('/getPlan',{
                templateUrl:'partials/AbcdPlan.html', //page for ABCD plan
                controller:'CollegeController'
            }).
            otherwise({
            redirectTo: '/welcome' //by default user will land to this page
        });
    }]);

varApp.filter('propsFilter', function() {
    return function(items, props) {
        var out = [];

        if (angular.isArray(items)) {
            items.forEach(function(item) {
                var itemMatches = false;

                var keys = Object.keys(props);
                for (var i = 0; i < keys.length; i++) {
                    var prop = keys[i];
                    var text = props[prop].toLowerCase();
                    if (item[prop].toString().toLowerCase().indexOf(text) !== -1) {
                        itemMatches = true;
                        break;
                    }
                }

                if (itemMatches) {
                    out.push(item);
                }
            });
        } else {
            // Let the output be the input untouched
            out = items;
        }

        return out;
    };
});