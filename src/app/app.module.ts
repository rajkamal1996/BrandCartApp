  import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {TranslateModule} from 'ng2-translate';
import {RouterModule } from '@angular/router';
import { SharedService } from './shared.service';
import {AppRouteModule} from './app-routeModule';
import{routingComponents} from './app-routeModule';
import { AppComponent } from './app.component';

import { AgmCoreModule } from 'angular2-google-maps/core';
import { FilterpipePipe } from './filterpipe.pipe';
import { BrandpipePipe } from './brandpipe.pipe';
import { UniquePipe } from './unique.pipe';
import { SettingsComponent } from './settings/settings.component';
const googleMapsCore = AgmCoreModule.forRoot({
  apiKey : 'AIzaSyCF6I4fUMy9Jymqjdv3RqMFL_sWh16W-Ag',
});
@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    FilterpipePipe,
    BrandpipePipe,
    UniquePipe,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TranslateModule.forRoot(),
    AppRouteModule,
    googleMapsCore

  ],
    exports: [
    TranslateModule
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
