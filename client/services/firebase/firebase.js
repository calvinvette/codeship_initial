angular.module('outlineApp')
.value('fbURL', 'https://ngedev.firebaseio.com/outlines/')
.factory('Outlines', function($firebase, fbURL, $rootScope) {
	$rootScope.$on("sectionAdded", function(e, d) {
		console.log("FBS: sectionAdded");
		console.dir(d);
	});
        return $firebase(new Firebase(fbURL));
});

