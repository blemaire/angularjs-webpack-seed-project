import {enableProdMode, Injector, StaticProvider} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AngularRootModuleNgFactory} from './angular-root.module.ngfactory';

enableProdMode();

//  TODO: find better place to store root Angular module
export let rootInjectorPromise: Promise<Injector> | null = null;

export const getRootInjector = (extraProviders: StaticProvider[]) => {
  if (!rootInjectorPromise) {
    rootInjectorPromise = platformBrowserDynamic(extraProviders)
      .bootstrapModuleFactory(AngularRootModuleNgFactory)
      .then(moduleRef => moduleRef.injector);
  }

  return rootInjectorPromise;
};
