import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AuthService } from './services/auth.service';
import { NgToastModule } from 'ng-angular-popup';
import { MoviesComponent } from './components/movies/movies.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieScreenComponent } from './components/movie-screen/movie-screen.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    MoviesComponent,
    MovieScreenComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    NgToastModule,
    HttpClientModule,

    
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
