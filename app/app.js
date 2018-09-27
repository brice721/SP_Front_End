(function() {
    'use strict';

    angular
        .module('snippets', [
            'ngRoute',
            // 'code-mirror',
            'code-mirror.service',
            'layouts.navigation',
            'snippets.views'
        ]);
})();