import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLogin } from './user-login/user-login.component';

import { UserListComponent } from './user-list/user-list.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // <== add the imports!
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    UserListComponent,
    UserDashboardComponent,
    UserLogin
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  bootstrap: [
    UserListComponent
  ]
})
export class UserModule { }
