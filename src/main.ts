import 'zone.js';
import 'reflect-metadata';
import * as angular from 'angular';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { setAngularLib } from '@angular/upgrade/static';


if (environment.production) {
  enableProdMode();
}

setAngularLib(angular);

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
