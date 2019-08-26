import {downgradeModule as ngDowngrade} from '@angular/upgrade/static';
import {Compiler, StaticProvider} from '@angular/core';
import {getRootInjector} from './bootstrap';

export function downgradeModule(module: any): string {
  return ngDowngrade((extraProviders: StaticProvider[]) => getRootInjector(extraProviders)
    .then(rootInjector => rootInjector.get(Compiler).compileModuleAsync(module)
      .then(moduleFactory => moduleFactory.create(rootInjector))));
}
