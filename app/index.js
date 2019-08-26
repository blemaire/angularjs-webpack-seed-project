import {module} from 'angular';
import {Visualizer} from '@uirouter/visualizer';

import {AppRoutingModule} from './app-routing.module';

module('App',[
    'ngMaterial',
    'ui.router',
    AppRoutingModule.name,
])
.run(['$uiRouter', function($uiRouter) {
    var pluginInstance = $uiRouter.plugin(Visualizer);
}])
.controller('AppController', function() {
    this.message = 'Hello. My First AngularJS App';
})
;
