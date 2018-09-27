(function() {
    'use strict';

    angular
        .module('views.editor')
        .controller('EditorController', ['CM', EditorController]);

    function EditorController(CM) {
        const vm = this;

        const editor = CM.fromTextArea(document.getElementById('editor'), {
            lineNumbers: true,
            mode: 'javascript',
            indentWithTabs: true,
            smartIndent: true,
            matchBrackets: true,
            theme: 'darcula',
            autofocus: true,
            extraKeys: {"Ctrl-Space": "autocomplete"}
        });
    }
})();