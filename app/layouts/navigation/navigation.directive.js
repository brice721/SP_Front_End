(function () {
    'use strict';

    angular
        .module('layouts.navigation')
        .directive('spireNavigation', function () {
            return {
                restrict: 'E',
                templateUrl: 'layouts/navigation/navigation.template.html'
            }
        });
})();
