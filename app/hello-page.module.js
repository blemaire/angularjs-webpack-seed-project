import angular from 'angular';

export const module = angular
    .module('helloPage', [])
    .component('helloPageComponent', {
        template: '<h3>hello page world! blah</h3>'
    })
;