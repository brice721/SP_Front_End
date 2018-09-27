(function() {
    'use strict';

    angular
        .module('snippets')
        .config(['$locationProvider', '$routeProvider', Config]);

    function Config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.when('/home', {
            templateUrl: 'views/home/home.template.html',
            controller: 'HomeController',
            controllerAs: 'hc'
        }).when('/editor', {
            templateUrl: 'views/editor/editor.template.html',
            controller: 'EditorController',
            controllerAs: 'ec'
        }).otherwise({ redirectTo: '/home'});
    }
})();