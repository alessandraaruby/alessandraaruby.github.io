var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "html/pages/main.html",
        controller: "HomeController"
    })
    .when("/others", {
        templateUrl : "html/pages/other.html"
    })
    .when("/support", {
        templateUrl : "html/pages/support.html"
    })
    .when("/user", {
        templateUrl : "html/pages/user/index.html"
    })
    .when("/animals", {
        templateUrl : "html/contents/miracles-on-animal/index.html"
    })
    .when("/quranicdua", {
        templateUrl : "html/contents/quranic-dua/index.html"
    })
    .when("/fbscams", {
        templateUrl : "html/contents/facebook-catfishers/index.html"
    })
    .when("/fakelucas", {
        templateUrl : "html/contents/facebook-catfishers/html/lucas/index.html"
    })
    .when("/fakezahra", {
        templateUrl : "html/contents/facebook-catfishers/html/zahra/index.html"
    })
    .when("/fakenadine", {
        templateUrl : "html/contents/facebook-catfishers/html/nadine/index.html"
    })
    .when("/fakekike", {
        templateUrl : "html/contents/facebook-catfishers/html/enrique/index.html"
    })
    .when("/fakerama", {
        templateUrl : "html/contents/facebook-catfishers/html/rama/index.html"
    })
    .when("/fakeshirouk", {
        templateUrl : "html/contents/facebook-catfishers/html/shirouk/index.html"
    })
    .when("/fakejack", {
        templateUrl : "html/contents/facebook-catfishers/html/jack/index.html"
    })
    .when("/fakeamirah", {
        templateUrl : "html/contents/facebook-catfishers/html/amirah/index.html"
    })
    .when("/model", {
        templateUrl : "html/contents/facebook-catfishers/html/model/index.html"
    })

    //other whens removed
    .otherwise({
        controller: 'Error404Controller',
        templateUrl: 'html/pages/error.html'
    });

});

//Collapsing Navbar Menu
$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});
