import {BrowserModule} from '@angular/platform-browser';

import {Compiler, COMPILER_OPTIONS, CompilerFactory, NgModule} from '@angular/core';
import {JitCompilerFactory} from '@angular/platform-browser-dynamic';

export function createCompiler(fn: CompilerFactory): Compiler {
  return fn.createCompiler();
}

@NgModule({
    imports: [BrowserModule],
     providers: [
    {
      provide: COMPILER_OPTIONS,
      useValue: {},
      multi: true,
    },
    {
      provide: CompilerFactory,
      useClass: JitCompilerFactory,
      deps: [COMPILER_OPTIONS],
    },
    {
      provide: Compiler,
      useFactory: createCompiler,
      deps: [CompilerFactory],
    }],
})
export class AngularRootModule {
    constructor() {
        console.log('AngularRootModule booted');
    }

    ngDoBootstrap() {
  }
}
