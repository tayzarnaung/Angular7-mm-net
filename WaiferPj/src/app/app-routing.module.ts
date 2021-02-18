import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NaviComponent } from './navi/navi.component';

const routes: Routes = [
  {path:'naviRouter', component:NaviComponent},
  {path:'homeRouter', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
