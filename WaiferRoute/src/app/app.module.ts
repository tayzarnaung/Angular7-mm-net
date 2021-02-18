import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { NavComponent } from './nav.component'
import { AppRoutingModule, routingComponents } from './app-routing.module';

// import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { HomeComponent } from './home.component';
// import { AboutComponent } from './about.component';
// import { PostComponent } from './post.component';

// import { PostDetailComponent} from './postdetail.component';
// import { EditpostComponent } from './editpost.component';


// import { AboutGuard } from './about.guard';
import { PostEditGuard } from './postedit.guard';

import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { DepartmentListComponent } from './department-list/department-list.component';


@NgModule({
  declarations: [
    AppComponent,
    // PageNotFoundComponent,
    // HomeComponent,
    // AboutComponent,
    // PostComponent,
    // PostDetailComponent,
    // EditpostComponent,
    NavComponent,
    routingComponents,
    
    DepartmentDetailComponent,
    DepartmentListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ PostEditGuard],
  // providers: [AboutGuard, PostEditGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
