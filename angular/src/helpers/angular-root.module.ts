import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
    imports: [BrowserModule],
})
export class AngularRootModule {
    constructor() {
        console.log('AngularRootModule booted');
    }

    ngDoBootstrap() {
  }
}
