import {downgradeComponent} from "@angular/upgrade/static";
import {module} from 'angular';

import {AppComponent} from '../angular/src/app/app.component';
import {Angular2DowngradedModule} from '../angular/src/downgraded';

export const Angular2Module = module('Angular2Module', [
        Angular2DowngradedModule,
    ])
    .config(['$stateProvider', function($stateProvider) {
        var ng2State = {
            name: 'ng2',
            url: '/ng2',
            component: 'appRoot',
        }
        $stateProvider.state(ng2State);
    }])
    .directive('appRoot', downgradeComponent({
        component: AppComponent,
        downgradedModule: Angular2DowngradedModule,
    }))
;
