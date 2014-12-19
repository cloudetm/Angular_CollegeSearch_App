/**
 * Created by vaibhavid on 04-12-2014.
 */

//Main services js file contains all services for the app

var varServices = angular.module('Services', ['ngResource']); //depend

//service reading data from college information data file
varServices.factory('DataService', ['$resource',
    function($resource){
        return $resource('data/data1.json', {}, {
            Collegequery: {method:'GET', params:{collegeId:'colleges'}, isArray:true}
        });
    }]);
//Service for reding data from header file
varServices.factory('HeaderService', ['$resource',
function($resource){
    var url = "data/Header.json";
    return $resource(url, {}, {
        Headerquery: {method:'GET', params:{id:'headers'}, isArray:true}
    });
}]);


/*
angular.module('productServices', ['ngResource']).
    factory('Product', ['$resource', function($resource){
        var Product = $resource('/api/products/:id', {  }, {
            update: { method: 'PUT' }
        });

        return Product;
    }]);

    */

//selection logic on the checkbox in table .
varServices.factory('CollegeService', function() {
    var selection=[];

    var selectservice = {

        list: function(){
          return selection;
        },
        toggleSelection: function toggleSelection(college) {
            var idx = selection.indexOf(college);

            // is currently selected
            if (idx > -1) {
                selection.splice(idx, 1);
            }
            // is newly selected
            else {
                selection.push(college);
            }
            return selection;
        }

    }
    return selectservice;
});

