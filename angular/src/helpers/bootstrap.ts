import {enableProdMode, Injector, StaticProvider} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AngularRootModule} from './angular-root.module';

if (process.env.NODE_ENV === 'production') {
    console.log("PROD MODE");
    enableProdMode();
}

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
