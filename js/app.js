var app = angular.module('myApp', [
        'ionic'
]);

app.config(function($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise('/');

        $stateProvider
                .state('login', {
                        url: "/login",
                        templateUrl: 'page/login.html'
                });
});