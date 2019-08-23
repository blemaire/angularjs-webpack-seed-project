import angular from 'angular';
import { Visualizer } from '@uirouter/visualizer';

import {HelloPageModule} from './hello-page/hello-page.module';

angular
    .module('App',[
        'ngMaterial',
        'ui.router',
        HelloPageModule.name,
    ])
    .run(['$uiRouter', function($uiRouter) {
        var pluginInstance = $uiRouter.plugin(Visualizer);
    }])
    .config(['$urlRouterProvider', '$locationProvider', function($urlRouterProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
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
    .controller('AppController', function() {
        this.message = 'Hello. My First AngularJS App';
    })
;
