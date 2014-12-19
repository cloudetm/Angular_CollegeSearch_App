/**
 * Created by vaibhavid on 17-12-2014.
 */


module.exports = function(config){
    config.set({

        basePath : './',

        files : [
            'app/bower_components/angular/angular.js',
            'app/bower_components/angular-mocks/angular-mocks.js',
            'app/test/PerfectBasic/TestAppmodule.js',
            'app/test/**/*.js'
        ],

        autoWatch : true,

        frameworks: ['jasmine'],

        browsers : ['Chrome'],

        plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
        ],

        junitReporter : {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        }

    });
};
