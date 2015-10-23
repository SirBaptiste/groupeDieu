'use strict';

/* Controllers */

var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Phone', '$http',
  function($scope, Phone, $http) {
    $scope.phones = Phone.query();
    $scope.orderProp = 'age';
  }]);
  
  
  
  
phonecatControllers.controller('ContactCtrl', ['$scope', '$http',
  function($scope, $http) {   
    $scope.setEmail = function(email, texte){
        $http({ method: 'POST', 
            url:'https://api.mailgun.net/v3/sandbox29551289ef694b178eaeb8ad87184484.mailgun.org/messages?to=b.guillemot95@gmail.com&from='+$scope.email+'&text='+$scope.texte,
            headers:{
                'Authorization': 'Basic YXBpOmtleS02ZTMyMTBiYjU5ZTBjZjBkMTQzNTI5OGFlNDA1ZWE2Zg=='
            }
        }).success(function() {
            alert('Message envoyé');
        }).error(function() {
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