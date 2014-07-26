'use strict';

angular.module('outlineApp')
  .controller('GridCtrl', function ($scope, $location, $http) {
	$http.get("http://nextgeneducation.com/weasley/customers.json").success(function(data) {
		console.log("data received");
		console.dir(data);
		$scope.theData = data;
	});
	$scope.theData = [];

	$scope.gridOptions = {
		data : 'theData',
        	enableCellSelection: true,
        	enableRowSelection: false,
        	enableCellEdit: true,
        	columnDefs: [
			{field: 'customerId', displayName: 'Customer ID', enableCellEdit: false}, 
			{field: 'firstName', displayName: 'First Name', enableCellEdit: true}, 
			{field: 'lastName', displayName: 'Last Name', enableCellEdit: true}, 
			{field: 'phoneNumber', displayName: 'Phone Number', enableCellEdit: true} 
		]
	};

  });
