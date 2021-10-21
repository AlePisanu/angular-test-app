import { SharedModule } from './components/shared/shared/shared.module';
import { RouterModule } from '@angular/router';
import { metaReducers, reducers } from './redux/index';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetUserInfoService } from './services/api/get-user-info.service';
import { EffectsModule } from '@ngrx/effects';
import { UserInfoEffect } from './redux/effects/user-info.effect';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { PagesModule } from './components/pages/pages/pages.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const services = [
  GetUserInfoService
];

const effects = [
  UserInfoEffect
];

const modules = [
  PagesModule,
  SharedModule
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, metaReducers),
    EffectsModule.forRoot(effects),
    HttpClientModule,
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
    ...modules,
  ],
  providers: [
    ...services
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
