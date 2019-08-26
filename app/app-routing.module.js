import angular from 'angular';

import {HelloPageModule} from './hello-page/hello-page.module';

export const AppRoutingModule = angular
    .module('AppRoutingModule', [
        'ui.router',
        HelloPageModule.name,
    ])
    .config(['$urlRouterProvider', '$locationProvider', function($urlRouterProvider, $locationProvider) {
        //$locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise('/');
    }])
    .config(['$stateProvider', function($stateProvider) {
        var helloState = {
            name: 'hello',
            url: '/hello',
            component: 'helloPageComponent',
        }

        var aboutState = {
            name: 'about',
            url: '/about',
            template: '<h3>Its the UI-Router hello world app!</h3>'
        }

        $stateProvider.state(helloState);
        $stateProvider.state(aboutState);
    }])
    ;