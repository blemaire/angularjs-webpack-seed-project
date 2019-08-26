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
            component: 'ng2Loader',
        }
        $stateProvider.state(ng2State);
    }])
    .component('ng2Loader', {
        template: '<div>ng2Loader</div><app-root></app-root>'
    })
    .directive('appRoot', downgradeComponent({
        component: AppComponent,
        downgradedModule: Angular2DowngradedModule,
    }))
;
