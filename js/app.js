var app = angular.module("APP",["ngRoute"]);
app.controller("mainCtrl",function($scope,$http,$location){
    $http.get("data.json").success(function(data){
        $scope.tableDataTechnology = data.tableTechnology;
        $scope.tableDataSales = data.tableSales;

        $scope.goToTechnology = function(){
            $location.path("/technology")
        };
        $scope.goToSales = function(){
            $location.path("/sales")
        }
    });
});
app.config(function($routeProvider,$locationProvider){
   $locationProvider.html5Mode(true);
    $routeProvider.when("/index.html",{
        templateUrl:"/project_manager/technology.html"
    });
    $routeProvider.when("/technology",{
        templateUrl:"/project_manager/technology.html"
    });
    $routeProvider.when("/sales",{
        templateUrl:"/project_manager/sales.html"
    });
    $routeProvider.otherwise({
        templateUrl:"/project_manager/index.html"
    });
});
