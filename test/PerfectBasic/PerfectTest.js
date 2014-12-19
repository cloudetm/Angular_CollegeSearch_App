/**
 * Created by vaibhavid on 17-12-2014.
 */

describe('PasswordController', function() {

    beforeEach(module('Passcontrl'));
    var scope;
    var ctrl;

    beforeEach(inject(function($rootScope, $controller) {
        scope = $rootScope.$new();
        ctrl = $controller('PasswordController', {$scope: scope});
    }));
    describe('$scope.grade', function() {

        it('sets the strength to "strong" if the password length is >8 chars', function() {
            scope.password = 'longerthaneightchars';
            scope.grade();
            expect(scope.strength).toEqual('strong');
        });


    });
});