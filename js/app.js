var app = angular.module("APP",['ngRoute','ngAnimate']);
app.controller("mainCtrl",function($scope,$http,$location){
    $http.get("data.json").success(function(data){
        $scope.tableDataTechnology = data.tableTechnology;
        $scope.tableDataSales = data.tableSales;
        $scope.tableDataMarketing = data.tableMarketing;
        $location.path("/index.html");
        $scope.goToTechnology();
    });
});
app.config(function($routeProvider,$locationProvider){
   $locationProvider.html5Mode(false);

    $routeProvider.when("/",{
        templateUrl:"/project_manager/technology.html"
    });
    $routeProvider.when("/technology",{
        templateUrl:"/project_manager/b-technology/technology.html"
    });
    $routeProvider.when("/technology_2",{
        templateUrl:"/project_manager/b-technology/technology_2.html"
    });
    $routeProvider.when("/sales",{
        templateUrl:"/project_manager/b-sales/sales.html"
    });
    $routeProvider.when("/sales_2",{
        templateUrl:"/project_manager/b-sales/sales_2.html"
    });
    $routeProvider.when("/marketing",{
        templateUrl:"/project_manager/b-marketing/marketing.html"
    });
    $routeProvider.when("/marketing_2",{
        templateUrl:"/project_manager/b-marketing/marketing_2.html"
    });
    $routeProvider.otherwise({
        redirectTo:"/"
    });
});
app.filter('slice', function() {
    return function(arr, start, end) {
        return arr.slice(start, end);
    };
});