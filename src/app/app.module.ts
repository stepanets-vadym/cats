// * Base
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import AppRoutingModule from './app-routing.module';
import { NgModule } from '@angular/core';

// * NGRX
import { reducers, metaReducers } from './store';
import { StoreModule } from '@ngrx/store';

// * Components
import AppComponent from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
