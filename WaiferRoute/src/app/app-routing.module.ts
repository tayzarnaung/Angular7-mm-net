import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';
import { PostComponent } from './post.component';

import { PostDetailComponent } from './postdetail.component';
import { EditpostComponent } from './editpost.component';

import { AboutGuard } from './about.guard';
import { PostEditGuard } from './postedit.guard';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';

const routes: Routes = [
  // {path: '', component:HomeComponent},
  // {path:'a' , redirectTo:'/home', pathMatch:'prefix'},
  {path:'', redirectTo:'/home', pathMatch: 'full'},
  {path: 'home', component:HomeComponent},
  {path:'about', component: AboutComponent, canActivate:[AboutGuard]},
  {path:'post/:id', component : PostComponent, 
    children: [
      {path:'', component:PostDetailComponent},
      {path:'postdetail', component:PostDetailComponent},
      {path:'editpost', component:EditpostComponent, canDeactivate: [PostEditGuard]}
    ]
  },
  {path: 'departments', component: DepartmentListComponent},
  {path: 'departments/:deptId', component:DepartmentDetailComponent},
  {path:'**', component:PageNotFoundComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

export const routingComponents = [
  PageNotFoundComponent, HomeComponent, AboutComponent, 
  PostComponent, PostDetailComponent, EditpostComponent
]