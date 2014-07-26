'use strict';

angular.module('outlineApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [
    {
      'title': 'Home',
      'state': 'Home',
      'link': '/'
    },
    {
      'title': 'Editor',
      'state': 'Editor',
      'link': '/Editor'
    },
    {
      'title': 'Slides',
      'state': 'Slides',
      'link': '/Slides'
    },
    {
      'title': 'Sketch',
      'state': 'Sketch',
      'link': '/Sketch'
    },
    {
      'title': 'Calendar',
      'state': 'Calendar',
      'link': '/Calendar'
    },
    {
      'title': 'Map',
      'state': 'Map',
      'link': '/Map'
    },
    {
      'title': 'Tree',
      'state': 'Tree',
      'link': '/Tree'
    },
    {
      'title': 'Grid',
      'state': 'Grid',
      'link': '/Grid'
    },
    {
      'title': 'UML',
      'state': 'UML',
      'link': '/UML'
    },
    {
      'title': 'BPMN',
      'state': 'BPMN',
      'link': '/BPMN'
    },
    {
      'title': 'ScreenFlow',
      'state': 'ScreenFlow',
      'link': '/ScreenFlow'
    },
    {
      'title': 'SSH',
      'state': 'SSH',
      'link': '/SSH'
    },
    {
      'title': 'VNC',
      'state': 'VNC',
      'link': '/VNC'
    },
    {
      'title': 'RDP',
      'state': 'RDP',
      'link': '/RDP'
    },


    ];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
