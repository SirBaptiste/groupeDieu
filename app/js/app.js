'use strict';

/* un autre truc */

var phonecatApp = angular.module('phonecatApp', [
  'ngRoute',
  'phonecatAnimations',

  'phonecatControllers',
  'phonecatFilters',
  'phonecatServices'
]);

phonecatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/phones', {
        templateUrl: 'partials/phone-list.html',
        controller: 'PhoneListCtrl'
      }).
      when('/phones/:phoneId', {
        templateUrl: 'partials/phone-detail.html',
        controller: 'PhoneDetailCtrl'
      }).
      when('/modification/:phoneId', {
          templateUrl: 'partials/modification.html',
          controller: 'PhoneDetailCtrl'
      }).
      when('/save/:phoneId/:nom/:description', {
          templateUrl: 'partials/modification.html',
          controller: 'PhoneDetailModif'
      }).
      when('/contact', {
          templateUrl: 'partials/contact.html',
          controller: 'ContactCtrl'
      }).
      otherwise({
        redirectTo: '/phones'
      });
  }]);