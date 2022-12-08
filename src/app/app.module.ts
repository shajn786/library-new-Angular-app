import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddBookComponent } from './add-book/add-book.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SearchBookComponent } from './search-book/search-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { IssueBookComponent } from './issue-book/issue-book.component';
import { ViewallBookComponent } from './viewall-book/viewall-book.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminnavbarComponent } from './adminnavbar/adminnavbar.component';

const myRoutes : Routes=[
  {
   path:"",component:AdminLoginComponent
  },
  {
    path:"add",component:AddBookComponent
  },
  {
    path:"search",component:SearchBookComponent
  },
  {
    path:"edit",component:EditBookComponent
  },
  {
    path:"issue",component:IssueBookComponent
  },
  {
    path:"viewall",component:ViewallBookComponent
  },
  {
    path:"register",component:RegistrationComponent
  },
  {
    path:"userlogin",component:UserLoginComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    AddBookComponent,
    SearchBookComponent,
    EditBookComponent,
    IssueBookComponent,
    ViewallBookComponent,
    RegistrationComponent,
    UserLoginComponent,
    AdminLoginComponent,
    AdminnavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
