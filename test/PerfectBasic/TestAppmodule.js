/**
 * Created by vaibhavid on 17-12-2014.
 */


var varpasApp = angular.module('Passcontrl',[]);


varpasApp.controller('PasswordController', function($scope) {
    $scope.password = 'abcd';
    $scope.grade = function() {
        var size = $scope.password.length;
        if (size > 8) {
            $scope.strength = 'strong';
        } else if (size > 3) {
            $scope.strength = 'medium';
        } else {
            $scope.strength = 'weak';
        }
    };
});