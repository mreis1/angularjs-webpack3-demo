let a = require('./module-a')

/*
 NOTE: Not importing AngularJS or anyother dependencies
 because they will be loaded at the index.html
 */
/* Import Angular and the angular app route configuration file */
var angular = require('angular');
//var uiRouter = require('@uirouter/angularjs');
var angularAnimate = require('angular-animate');
var angularAria = require('angular-aria');
var angularMaterial = require('angular-material');
var app = angular.module("app", [ angularMaterial, angularAnimate, angularAria]); //uiRouter,

//require('./router')(app);
require('./components/home/home.component')(app);
require('./vendor');

setTimeout(function(){
    a()
},2000);