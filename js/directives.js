app.directive("ngButtonRow",function($location){
    return{
        link: function(scope,element){
            console.log(element.find("button")[0]);
            var btn0 = element.find("button")[0];
            $(btn0).addClass('active');
            scope.goToTechnology = function(){
                $(scope.btn1).addClass('active_btn');
                $(scope.btn2).removeClass('active_btn');
                $location.path("/technology");
                scope.path = $location.path("/technology").$$path;
           };
            scope.goToSales = function(){
                $(btn0).removeClass('active');
                $(scope.btn1).addClass('active_btn');
                $(scope.btn2).removeClass('active_btn');
                $location.path("/sales");
                scope.path = $location.path("/sales").$$path;
            };
            scope.goToMarketing = function(){
                $(btn0).removeClass('active');
                $(scope.btn1).addClass('active_btn');
                $(scope.btn2).removeClass('active_btn');
                $location.path("/marketing");
                scope.path = $location.path("/marketing").$$path;
            };
        },
        restrict: "A",
        templateUrl: "b-button_row/button_row.html"
    }
});
app.directive('ngActive', function() {
    return {
        link: function(scope, element) {
            element.on('click', function() {
                element.addClass('active');
                element.removeClass('active');
            });
        },
        restrict: "A"
    }
});

app.directive("ngBlock",function(){
    return{
        link: function(scope,element,attributes){

        },
        restrict: "A",
        templateUrl: "b-main/block_main.html"
    }
});
app.directive("ngPage",function($location){
    return{
        link: function(scope,element) {
            var btn1 = element.children()[0];
            var btn2 = element.children()[1];
            scope.btn1 = btn1;
            scope.btn2 = btn2;
            $(btn1).addClass('active_btn');

            scope.prePage = function () {
                    $(btn1).addClass('active_btn');
                    $(btn2).removeClass('active_btn');

                    if(scope.path == "/technology"){
                        $location.path("/technology");
                    }else if(scope.path == "/sales"){
                        $location.path("/sales");
                    }else if(scope.path == "/marketing"){
                        $location.path("/marketing");
                    }
            };
            scope.nextPage = function () {
                    $(btn1).removeClass('active_btn');
                    $(btn2).addClass('active_btn');

                    if(scope.path == "/technology"){
                        $location.path("/technology_2");
                    }else if(scope.path  == "/sales"){
                        $location.path("/sales_2");
                    }else if(scope.path == "/marketing"){
                        $location.path("/marketing_2");
                    }
            };
        },
        restrict: "A"
    }
});
