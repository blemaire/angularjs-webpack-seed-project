
import {module} from 'angular';

export const AppModule = module('App', [])
.controller('AppController', function() {
    this.message = 'Hello. My First AngularJS App';
});
