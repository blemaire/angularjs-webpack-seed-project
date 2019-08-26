import {StaticProvider} from '@angular/core';
import {downgradeModule as ngDowngradeModule} from '@angular/upgrade/static';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {downgradeModule} from './helpers/downgrade';
import {AppModule} from './app/app.module';
import 'zone.js/dist/zone';  // Included with Angular CLI.

//const ng2BootstrapFn = (extraProviders: StaticProvider[]) =>
//    platformBrowserDynamic(extraProviders).bootstrapModule(AppModule);

export const Angular2DowngradedModule = downgradeModule(AppModule);
