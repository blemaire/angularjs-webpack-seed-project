 import angular from 'angular';

 export const HelloPageModule = angular.module('HelloPageModule', [])
    .component('helloPageComponent', {
        template: '<h3>hello world!</h3>',
    })
;