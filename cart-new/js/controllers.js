var listApp=angular.module('listApp',[]);

listApp.controller('listCtrl', ['$scope','$http', function(scope,http){
	scope.cart=[];
	var jsonfile='products.json';
	http.get(jsonfile).success(function(response) {
			scope.products=response.products;
		});

	scope.addToCart=function(product){
		var found=false;
		scope.cart_qty=0;
		angular.forEach(function(item){
			if(item.id === product.id){
				item.quantity++;
				found=true;
			}
		});
		if (!found) {
			scope.cart.push(angular.extend({quantity: 1}, product));
			scope.cart_qty=scope.cart.length;
		}
	};

	scope.goToProduct=function(product){

	};
	scope.getCartPrice = function () {
		var total = 0;
		scope.cart.forEach(function (product) {
			total += product.price * product.quantity;
		});
		return total;
	};
}]);

listApp.controller('detailsCtrl', ['$scope','$http','$routeParams', function(scope,http,routeParams){
	scope.sayHi='hi';
	http.get('products.json').success(function(response){
		scope.products=response.products;
		scope.whichItem=routeParams.itemId;
	})
}])
