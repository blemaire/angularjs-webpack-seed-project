import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {Injector, StaticProvider} from '@angular/core';

import {AngularRootModule} from './angular-root.module';

//  TODO: find better place to store root Angular module
export let rootInjectorPromise: Promise<Injector> | null = null;

export const getRootInjector = (extraProviders: StaticProvider[]) => {
  if (!rootInjectorPromise) {
    rootInjectorPromise = platformBrowserDynamic(extraProviders)
      .bootstrapModule(AngularRootModule)
      .then(moduleRef => moduleRef.injector);
  }
  return rootInjectorPromise;
};
