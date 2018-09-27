(function () {
    'use strict';

    angular
        .module('code-mirror.service', [])
        .service('CM', ['$window', CM]);

    function CM($window) {
        return $window.CodeMirror;
    }
})();