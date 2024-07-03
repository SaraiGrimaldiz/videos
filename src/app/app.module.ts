import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { MainComponent } from './components/main/main.component';
import { LoginComponent } from './autentication/login/login.component';
import { RegisterComponent } from './autentication/register/register.component';
import { FormsModule } from '@angular/forms';
import { MoviesComponent } from './pages/movies/movies.component';
import { CrudMoviesComponent } from './dashboard/crud-movies/crud-movies.component';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { provideFirebaseApp } from '@angular/fire/app';
import { initializeApp } from 'firebase/app';
import { provideAuth, getAuth} from '@angular/fire/auth';
import { FormMoviesComponent } from './dashboard/form-movies/form-movies.component';
import { PlayComponent } from './play/play.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MainComponent,
    LoginComponent,
    RegisterComponent,
    MoviesComponent,
    CrudMoviesComponent,
    FormMoviesComponent,
    PlayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    provideFirebaseApp(()=> initializeApp(environment.firebaseConfig)),
    provideAuth(() => getAuth()),
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
