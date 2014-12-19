/**
 * Created by vaibhavid on 04-12-2014.
 */

var varcontrollerApp = angular.module('controllerApp',['Services','ui.bootstrap','checklist-model','angular.filter']);


varcontrollerApp.filter('startFrom', function() {
    return function(input, start) {
        if(input) {
            start = +start; //parse to int
            return input.slice(start);
        }
        return [];
    }
});
varcontrollerApp.controller('CollegeController',function($scope,DataService,HeaderService,CollegeService,$location,$timeout){
    $scope.Collegelist  = DataService.Collegequery();
    $scope.headerList = HeaderService.Headerquery();
    $scope.StateList  = [];
    //$scope.list = data;
    $scope.currentPage = 1; //current page
    $scope.entryLimit = 5; //max no of items to display in a page
    $scope.filteredItems =  $scope.Collegelist.length; //Initially for no filter
    $scope.totalItems =  $scope.Collegelist.length;

   //Sorting and pagination logic
    $scope.setPage = function(pageNo) {
        $scope.currentPage = pageNo;
    };
    $scope.filter = function() {
        $timeout(function() {
            $scope.filteredItems = $scope.filtered.length;
        }, 10);
    };
    //sort by function
    $scope.sort_by = function(predicate) {
        $scope.predicate = predicate;
        $scope.reverse = !$scope.reverse;
    };



    //checkbox selection logic
    $scope.selection=CollegeService.list();

    $scope.toggleSelection = function (college) {
        CollegeService.toggleSelection(college);
    };

    //To go to display details page from welcome page
    $scope.getDetails = function() {
        $location.path('/showDetails');
    };

    //To go to ABCD plan page
    $scope.getPlan = function() {
        $location.path('/getPlan');
    };
    //to go to welcome page
    $scope.getWelcome = function() {
        $location.path('/welcome');
    };

    $scope.searchbyState = function(){

    }
  });


varcontrollerApp.controller('LoginController', function($scope, $location) {

    var _validate = function(username, password) {
        return username === 'Vaibhavi' && password === 'Vaibhavi@1';
    };

    $scope.login = function() {
        $scope.message = "";

        if (_validate($scope.username, $scope.password)) {
            $location.path('/welcome');
        } else {
            $scope.username = '';
            $scope.password = '';
            $scope.message = "Incorrect username or password!";
        }

    };

    $scope.logout = function() {
        $location.path('/login');
    };

   });


varcontrollerApp.controller('Ctrl3', function($scope,CollegeService) {

    $scope.states = {};

    $scope.statestobeSearched=[];
    $scope.addState = function(college){
        $scope.statestobeSearched.push(college);
    };
    //checkbox selection logic
    $scope.stselection=CollegeService.list();

    $scope.togglestSelection = function (college) {
        CollegeService.toggleSelection(college);
    };

    $scope.toggle = function(){
        $scope.toglevar = !$scope.toglevar;
    }
});

varcontrollerApp.controller('SearchController',function($scope){

});