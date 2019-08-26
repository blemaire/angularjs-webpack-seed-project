import {StaticProvider} from '@angular/core';
import {downgradeModule as ngDowngradeModule} from '@angular/upgrade/static';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {downgradeModule} from './helpers/downgrade';
import {AppModule} from './app/app.module';

const ng2BootstrapFn = (extraProviders: StaticProvider[]) =>
    platformBrowserDynamic(extraProviders).bootstrapModule(AppModule);


export const ng2DowngradedModule = ngDowngradeModule(ng2BootstrapFn);
