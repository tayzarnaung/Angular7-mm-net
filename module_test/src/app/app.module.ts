import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { HomeModule } from './home/home.module';
import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';

import { OrderService } from './order.service';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    CoreModule
  ],
  providers: [OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
