import { BrowserModule, Title } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {  AppRoutes, AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { Http } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/shared/shared.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { WpApiLoader, WpApiModule, WpApiStaticLoader } from 'wp-api-angular';
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Http } from '@angular/http';

import { CookieLawModule } from 'angular2-cookie-law';
import { RouterModule } from '@angular/router';
import { TransferHttpCacheModule } from '@nguniversal/common';

export function WpApiLoaderFactory(http: Http) {
  return new WpApiStaticLoader(http, 'https://blog.bookonepms.com/wp-json/wp/v2/', '');
}
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    HttpClientModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    TransferHttpCacheModule,
    NgSelectModule,
    RouterModule.forRoot(AppRoutes,{ scrollPositionRestoration: 'enabled' }),
    WpApiModule.forRoot({ // <---
      provide: WpApiLoader,
      useFactory: (WpApiLoaderFactory),
      deps: [ Http ]
    }),
    CookieLawModule
  ],

  providers: [Title,
    { provide: 'LOCALSTORAGE', useFactory: getLocalStorage },
    {provide: LocationStrategy, useClass: PathLocationStrategy},],
    schemas: [
      CUSTOM_ELEMENTS_SCHEMA
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function getLocalStorage() {
  return (typeof window !== "undefined") ? window.localStorage : null;
}
