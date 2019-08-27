import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { AppModule as ng1Module } from '../../ng1/app/app.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    UpgradeModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) { }

  ngDoBootstrap() {
    console.log('ok');
    this.upgrade.bootstrap(document.body, [ng1Module.name], { strictDi: true });
  }
}
