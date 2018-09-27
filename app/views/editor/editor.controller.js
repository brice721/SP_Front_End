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

        vm.codeEditor = '';
        vm.fakeSave = () => {
            const input = document.getElementById('editor');
            console.log('Here is your value:\n', input.innerText);
        };
    }
})();