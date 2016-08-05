'use strict';

const app = angular.module('curio', ['ui.router', 'ngVidBg']);

app.config(function ($urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
  $urlRouterProvider.otherwise('/');
});

app.controller('vidCtrl', function ($scope) {
  $scope.resources = ['../public/Wind-Snow.mp4'];
  $scope.fullScreen = true;
  $scope.muted = true;
  $scope.zIndex = '22';
  $scope.loop = true;
  $scope.autoPlay = true;
  $scope.playInfo = {};
  $scope.pausePlay = true;
});

