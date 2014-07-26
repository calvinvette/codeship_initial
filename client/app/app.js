'use strict';

angular.module('outlineApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngGrid',
  'ui.bootstrap',
  'ui.tree',
  'ui.ace',
  'ui.router',
  'firebase'
])
.run(
  [          '$rootScope', '$state', '$stateParams',
    function ($rootScope,   $state,   $stateParams) {

    // It's very handy to add references to $state and $stateParams to the $rootScope
    // so that you can access them from any scope within your applications.For example,
    // <li ui-sref-active="active }"> will set the <li> // to active whenever
    // 'contacts.list' or one of its decendents is active.
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
    }
  ]
)
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      	.otherwise('/');
    $stateProvider
	.state("Sketch", { url:'/Sketch', templateUrl:'/components/sketch/sketch.html' })
	.state("Slides", { url:'/Slides', templateUrl:'/components/slides/slides.html' })
	.state("Editor", { url:'/Editor', templateUrl:'/components/editor/editor.html' })
	.state("Calendar", { url:'/Calendar', templateUrl:'/components/calendar/calendar.html' })
	.state("Map", { url:'/Map', templateUrl:'/components/map/map.html' })
	.state("Tree", { url:'/Tree', templateUrl:'/components/tree/tree.html' })
	.state("Grid", { url:'/Grid', templateUrl:'/components/grid/grid.html' })
	.state("UML", { url:'/UML', templateUrl:'/components/uml/uml.html' })
	.state("BPMN", { url:'/BPMN', templateUrl:'/components/bpmn/bpmn.html' })
	.state("ERD", { url:'/ERD', templateUrl:'/components/erd/erd.html' })
	.state("ScreenFlow", { url:'/ScreenFlow', templateUrl:'/components/screenflow/screenflow.html' })
	.state("SSH", { url:'/SSH', templateUrl:'/components/ssh/ssh.html' })
	.state("VNC", { url:'/VNC', templateUrl:'/components/vnc/vnc.html' })
	.state("RDP", { url:'/RDP', templateUrl:'/components/rdp/rdp.html' })
    ;
    $locationProvider.html5Mode(true);
  });

