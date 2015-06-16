module.exports = function(config){
  config.set({

    basePath : '../',

    files : [
      'public/app/bower_components/angular/angular.js',
      'public/app/bower_components/angular-route/angular-route.js',
      'public/app/bower_components/angular-mocks/angular-mocks.js',
      'public/app/bower_components/angular-cookies/angular-cookies.js',
      'public/app/view2/*.js',
      'test/unit/**/*.js'
    ],

    autoWatch : true,

    singleRun:true,
    frameworks: ['jasmine'],
    browsers:['PhantomJS','Chrome'],

    plugins : [
      'karma-phantomjs-launcher',
      'karma-chrome-launcher',
      'karma-jasmine',
      'karma-junit-reporter',
      'karma-coverage'
    ],
    reporters:['dots','junit','coverage'],
    preprocessors:{
      'app/js/*.js':['coverage']
    },
    junitReporter : {
      outputFile: 'test/unit/karma.xml',
      suite: ''
    },
    coverageReporter:{
      type:"cobertura",
      dir:'test/unit/'
    }

  });
};
