'use strict';

angular.module('outlineApp')
  .controller('TreeCtrl', function ($scope, $location, $rootScope, Outlines) {
// Outlines is a firebase - should be migrated out to event-driven worker
// 
// $getIndex
// $add
// $remove
// $firebase
	$scope.outlineEditor = {
		mode : 'javascript',
		onLoad : function(_ace) {
			$scope.modeChanged = function() {
				_ace.getSession().setMode("ace/mode" + $scope.mode.toLowerCase());
			};
		}
	};

	$scope.editX = function(m) {
		console.log("Editing: ");
		console.dir(m);
	};

	$scope.over = function(m) {
		console.log("Hovering: ");
		console.dir(m);
	};

	$scope.theOutline = {
		modules : [
		{ type: "module", title : "Overview", modules : [ 
			{ type: "module", title : "History" },
			{ type: "module", title : "JavaVM and the JRE" },
			{ type: "module", title : "Java Editions" },
			{ type: "module", title : "Java Versions" },
			{ type: "module", title : "JDK Components" },
			{ type: "module", title : "Installation" }
		] },
		{ type: "module", title : "Simple Programs", module : [] },
		{ type: "module", title : "Objects", module : [] },
		{ type: "module", title : "Inheritance", module : [] }
	]};
	$scope.jsonData = JSON.stringify($scope.theOutline, null, 2);
	//$("#json").html(JSON.stringify($scope.theOutline, null, 2));
	$scope.$watch('jsonData', function(e, d) {
		console.log("jsonData changed");
		$scope.theOutline = JSON.parse($scope.jsonData);
	});

	$scope.expcoll = function(scope) {
		console.log("toggle");
		//scope.collapse();
		scope.toggle();
		console.dir(scope);
	};
	$scope.rmv = function(scope) {
		console.log("remove");
		console.dir(scope);
// REMOVE
		remove(scope);
	};
	$scope.newSubItem = function(scope) {
		console.log("new sub item");
		var module = scope.$modelValue;
console.dir(module);
		if(!module.modules) {
			module.modules = [];
		}
		var newSection = {title:"New Section"};
		module.modules.push(newSection);
		$rootScope.$emit("sectionAdded", {module : module, section : newSection});
		//Outlines.$add(newSection);
	};
	$(document).on("addItem", function(e, d) {
		console.dir(d);
		$scope.theOutline.modules.push(d);
		$scope.depth();
	});
	$rootScope.$on("sectionAdded", function(e, d) {
		$scope.jsonData = JSON.stringify($scope.theOutline, function (key, val) {
			if (key == '$$hashKey') {
				return undefined;
			}
     				return val;
			}
		, 2);
		//$("#json").html(JSON.stringify($scope.theOutline, undefined, 2));
	});
  });

