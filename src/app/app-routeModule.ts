import {RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SearchComponent } from './search/search.component';
import { MapDisplayComponent } from './map-display/map-display.component';
import { PlaceLocatorComponent } from './place-locator/place-locator.component';
import { BrandDetailComponent } from './brand-detail.component';

const routes : Routes = [
    {
      path: '',
      pathMatch: 'full',
      redirectTo: '/login'},
      {path: 'login', component: LoginComponent},
      {path: 'signup', component:SignupComponent },
      {path: 'map-display', component: MapDisplayComponent},
      {path: 'search', component:SearchComponent},
      {path: 'search/:name', component:BrandDetailComponent},
      {path: 'place-locator', component:PlaceLocatorComponent},
      { path: '**', component: LoginComponent }
];

@NgModule({
    imports: [
      RouterModule.forRoot(routes)  
    ],
    exports: [
      RouterModule
     ]
    })
    export class AppRouteModule{

    }
    export const routingComponents = [
        HeaderComponent,
        FooterComponent,
        LoginComponent,
        SignupComponent,
        SearchComponent,
        MapDisplayComponent,
        PlaceLocatorComponent,
        BrandDetailComponent
      ];