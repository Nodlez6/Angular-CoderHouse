import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MovieScreenComponent } from './components/movie-screen/movie-screen.component';
import { MoviesComponent } from './components/movies/movies.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './shared/auth.guard';
import { LogoutGuard } from './shared/logout.guard';

const routes: Routes = [

  {path: 'login', component: LoginComponent, canActivate: [LogoutGuard]},
 
  {path: 'register', component: RegisterComponent, canActivate: [LogoutGuard]},
  {path: 'popular', component: MoviesComponent},
  {path: ':value/:id', component: MovieScreenComponent},
  {path: 'toprated', component: MoviesComponent, canActivate: [AuthGuard]},
  {path: 'upcoming', component: MoviesComponent, canActivate: [AuthGuard]},
  {path: '**', redirectTo: 'popular'},
  {path: '**',redirectTo: '/login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
