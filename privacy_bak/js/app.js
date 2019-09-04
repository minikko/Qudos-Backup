/* Copyrights-Developed by Qudos Technologies INC. */
angular.module('qudosLegal', ['ui.bootstrap','ui.router','ui.tree']);
angular.module('qudosLegal').config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider.state('home', {
        url: '/home',
        templateUrl: 'index.html',
        controller : 'homeCtrl'
    })
});