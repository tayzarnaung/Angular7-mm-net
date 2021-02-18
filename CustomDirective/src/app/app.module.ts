import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { MakeroundDirective } from 'src/app/directive/makeround.directive';
import { TestingDirective } from './directive/testing.directive';

@NgModule({
  declarations: [
    AppComponent,
    MakeroundDirective,
    TestingDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
