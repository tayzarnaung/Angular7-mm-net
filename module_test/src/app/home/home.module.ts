import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';

import { OrderItemComponent } from './order-item/order-item.component';
import { OrderComponent } from './order/order.component';
import { HomeComponent } from './home.component';
import { CoreModule } from '../core/core.module';


@NgModule({
  declarations: [OrderItemComponent, OrderComponent, HomeComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatDialogModule,
    CoreModule
  ],
  exports: [ OrderItemComponent, OrderComponent, HomeComponent]
})
export class HomeModule { }
