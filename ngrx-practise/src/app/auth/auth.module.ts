import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule, Component } from '@angular/core';
import { RegisterComponent } from './components/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
  },
];
@NgModule({
  declarations: [RegisterComponent],

  imports: [CommonModule, RouterModule.forChild(routes), ReactiveFormsModule],
  providers: [],
})
export class AuthModule {}
