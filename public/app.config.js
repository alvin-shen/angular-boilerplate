'use strict';

angular.
  module('phonecatApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      // http://localhost:5000/
      // http://localhost:5000/#!/myComponent/:urlParam1
      $routeProvider.
        when('/', {
          template: '<component-one></component-one>'
        }).
        when('/myComponent/:urlParam1', {
          template: '<component-two></component-two>'
        }).
        otherwise('/');

    }
  ]);
