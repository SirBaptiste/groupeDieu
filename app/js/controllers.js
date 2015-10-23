'use strict';

/* Controllers */

var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Phone', '$http',
  function($scope, Phone, $http) {
    $scope.phones = Phone.query();
    $scope.orderProp = 'age';
    
    $scope.setEmail = function(email, texte){
        $http({ method: 'POST', 
            url:'https://api.mailgun.net/v3/sandbox29551289ef694b178eaeb8ad87184484.mailgun.org/messages?to='+$scope.email+'&from=tamaman@georgette.bite&text='+$scope.texte,
            headers:{
                'Authorization': 'Basic YXBpOmtleS02ZTMyMTBiYjU5ZTBjZjBkMTQzNTI5OGFlNDA1ZWE2Zg=='
            }
        }).success(function(response) {
            alert('Message envoyé');
        }).error(function(reponse) {
            alert('Message non envoyé');
        });
    };
  }]);

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone',
  function($scope, $routeParams, Phone) {
    $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
      $scope.mainImageUrl = phone.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    };
  }]);
  
phonecatControllers.controller('PhoneDetailModif', ['$scope', '$routeParams', 'Phone','nom', 'description',
  function($scope, Phone, nom, description) {
      console.log($routeParams);
  }]);