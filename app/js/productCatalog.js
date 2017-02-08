/**
 *
 * @type {angular.Module}
 */

var shopApp = angular.module("shopApp", []);
shopApp.controller("catalogController", function ($http, $scope) {


        debugger;
        $http.get("http://localhost:8080/myTomcat/onlineShop/productCategory/getHighestNodes")
            .then(function (response) {
                $scope.myWelcome = response.data;
            });

});