import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NotFoundComponent } from './../shared/components/not-found/not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ValidateEmailComponent } from './components/validate-email/validate-email.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component'

const userRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'verify-email', component: ValidateEmailComponent},
  {path: 'forgot-password', component: ForgotPasswordComponent},
  {path: '',redirectTo:"/login", pathMatch:"full"},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
    declarations:[
    ProfileComponent,
    LoginComponent,
    RegisterComponent,
    ValidateEmailComponent,
    ForgotPasswordComponent
  ],
    imports:[
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild(userRoutes)
    ],
    providers:[],
    exports:[
      RouterModule,
      RegisterComponent
    ]
})

export class UserModule{}