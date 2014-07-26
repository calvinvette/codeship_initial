'use strict';

angular.module('outlineApp')
  .controller('EditorCtrl', function ($scope, $location) {
	$scope.modes = ['java', 'javascript', 'xml', 'html', 'css'];
	$scope.mode = $scope.modes[1]; // JavaScript
	$scope.myEditor = {
		mode : $scope.mode.toLowerCase(),
		onLoad : function(_ace) {
			$scope.modeChanged = function() {
				_ace.getSession().setMode("ace/mode/" + $scope.mode.toLowerCase());
			};
		}
	};

	$scope.myCode = 'function foo() { console.log("foo"); }';


  });
