import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NaviComponent } from './navi/navi.component';

import {RouterModule} from "@angular/router";

import  {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';

import {MyserviceService} from "./sysgen/myservice.service";
import { TestoneComponent } from './service_test/testone/testone.component';
import { TesttwoComponent } from './service_test/testtwo/testtwo.component';

import {AddPipe} from './AddPipe';
import { SortPipe } from './SortPipe';


@NgModule({
  declarations: [ 
    AddPipe,
    SortPipe,   
    AppComponent,
    HomeComponent,
    NaviComponent,
    TestoneComponent,
    TesttwoComponent  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
        path: 'naviRouter',
        component: NaviComponent
      },
      {
        path: "homeRouter",
        component:HomeComponent
      },
      {
        path: 'aboutRouter',
        component:HomeComponent 
      }
    ])
  ],
  providers: [MyserviceService], 
  bootstrap: [AppComponent]
})
export class AppModule { }
