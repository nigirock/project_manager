var app = angular.module("APP",["ngRoute"]);
app.controller("mainCtrl",function($scope,$http,$location){
    $http.get("data.json").success(function(data){
        $scope.tableDataTechnology = data.tableTechnology;
        $scope.tableDataSales = data.tableSales;
        $location.path("/index.html");
    });
});
app.config(function($routeProvider,$locationProvider){
   $locationProvider.html5Mode(false);

    $routeProvider.when("/",{
        templateUrl:"/project_manager/technology.html"
    });
    $routeProvider.when("/technology",{
        templateUrl:"/project_manager/technology.html"
    });
    $routeProvider.when("/sales",{
        templateUrl:"/project_manager/sales.html"
    });
    $routeProvider.otherwise({
        redirectTo:"/"
    });
});
