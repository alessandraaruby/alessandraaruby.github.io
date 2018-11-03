angular.module('myapp', ["ui.router","ngAnimate"])
.config(function($stateProvider, $urlRouterProvider){
      
      // For any unmatched url, send to /populations
      $urlRouterProvider.otherwise('/home')
      
      $stateProvider
        .state('home', {
          url: '/home',
          templateUrl: 'admin.html'
        })
        .state('populations', {
            url: "/populations",
            templateUrl: "populations.html"
        })
        .state('populations.visits', {
            url: "/visits",
            templateUrl: "populations.visits.html",
            controller: 'VisitCtrl'
        })
        .state('populations.subjects', {
            url: "/subjects",
            templateUrl: "populations.subjects.html",
            controller: 'SubjectCtrl'
        })
        .state('personnel', {
            url: "/personnel",
            templateUrl: "personnel.html",
            controller: 'PersonnelCtrl'
        })
        .state('personnel.list', {
          url: '/list',
          templateUrl: 'personnel.list.html',
          controller: 'PersonnelCtrl'
        })
        .state('personnel.list.person', {
          url: '/:id',
          templateUrl: 'personnel.list.person.html',
          controller: function($scope, $stateParams){
            $scope.id = $stateParams.id
          }
        });
    })
    .controller('PersonnelCtrl', ['$scope', '$rootScope', function($scope, $rootScope){
      $scope.personnel = [{id:'1', name:"David"}, {id:'2', name:"Jon"}, {id:'3', name:"Tim"}, {id:'4', name:"Don"}];
      
    }])
    .controller('SubjectCtrl', ['$scope', function($scope){
      $scope.subjects = ['100101', '100201', '100301'];
    }])
    .controller('VisitCtrl', ['$scope', function($scope){
      $scope.visits = ["Enr", "Xab", "Conv"];
    }])
    
    .directive('animate', function($animate, $timeout){
      return function(scope, element, attrs){
          $timeout(function(){
            $animate.addClass(element, "animate");
          }, 0);
        }
    })
    ;
