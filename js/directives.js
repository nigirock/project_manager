app.directive("ngButtonRow",function($location){
    return{
        link: function(scope){
            scope.goToTechnology = function(){
                $location.path("/technology");
           };
            scope.goToSales = function(){
                $location.path("/sales");
            };
        },
        restrict: "A",
        templateUrl: "button_row.html"
    }
});
app.directive('ngActive', function() {
    return {
        link: function(scope, element) {
            element.bind('click', function() {
                element.addClass('active');
            });
        },
        restrict: "A"
    }
});
app.directive("ngTechnology",function(){
    return{
        link: function(scope,element,attributes){

        },
        restrict: "A",
        templateUrl: "technology.html"
    }
});
app.directive("ngBlock",function(){
    return{
        link: function(scope,element,attributes){

        },
        restrict: "A",
        templateUrl: "block_main.html"
    }
});
app.directive("ngPage",function(){
    return{
        link: function(scope,element) {
            scope.prePage = function () {

            };
            scope.nextPage = function () {

            };
        },
        restrict: "A"
    }
});
