import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './shared/auth.guard';
import { LogoutGuard } from './shared/logout.guard';

const routes: Routes = [
  {path: 'login', component: LoginComponent, canActivate: [LogoutGuard]},
  {path: 'register', component: RegisterComponent, canActivate: [LogoutGuard]},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: '**',redirectTo: '/login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
