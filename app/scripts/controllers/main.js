'use strict';

/**
 * @ngdoc function
 * @name blueBuyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the blueBuyApp
 */
angular.module('blueBuyApp')
  .controller('MainCtrl', function ($scope) {
    $scope.image1=true;
    $scope.image2=false;
    $scope.image3=false;
    $scope.imagecode="image1.jpg"

    $scope.clickLeft=function(){
    	if($scope.image1){
    		$scope.imagecode="image3.jpg"
    		$scope.image1=false;
    		$scope.image2=false;
    		$scope.image3=true;
    	}
    	else if($scope.image2){
    		$scope.imagecode="image1.jpg"
    		$scope.image1=true;
    		$scope.image2=false;
    		$scope.image3=false;
    	}
    	else if($scope.image3){
    		$scope.imagecode="image2.jpg"
    		$scope.image1=false;
    		$scope.image2=true;
    		$scope.image3=false;
    	}
    };
    $scope.clickRight=function(){
    	if($scope.image1){
    		$scope.imagecode="image2.jpg"
    		$scope.image1=false;
    		$scope.image2=true;
    		$scope.image3=false;
    	}
    	else if($scope.image2){
    		$scope.imagecode="image3.jpg"
    		$scope.image1=false;
    		$scope.image2=false;
    		$scope.image3=true;
    	}
    	else if($scope.image3){
    		$scope.imagecode="image1.jpg"
    		$scope.image1=true;
    		$scope.image2=false;
    		$scope.image3=false;
    	}
    };
  });
