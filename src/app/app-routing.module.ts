import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './autentication/login/login.component';
import { RegisterComponent } from './autentication/register/register.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { CrudMoviesComponent } from './dashboard/crud-movies/crud-movies.component';
import { FormMoviesComponent } from './dashboard/form-movies/form-movies.component';
import { PlayComponent } from './play/play.component';

import { AuthGuard } from './services/auth.guard';




const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'movies', component: MoviesComponent, canActivate: [AuthGuard] },
  { path: 'dashboard', component: CrudMoviesComponent, canActivate: [AuthGuard] },
  { path: 'add-movie', component: FormMoviesComponent, canActivate: [AuthGuard] },
  { path: 'play/:url', component: PlayComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}





/*import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './autentication/login/login.component';
import { RegisterComponent } from './autentication/register/register.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { CrudMoviesComponent } from './dashboard/crud-movies/crud-movies.component';
import { FormMoviesComponent } from './dashboard/form-movies/form-movies.component';

import { PlayComponent } from './play/play.component';



const routes: Routes = [
  {path: '', redirectTo:'/home', pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'movies', component: MoviesComponent},
  {path: 'dashboard', component: CrudMoviesComponent},
  {path: 'add-movie', component: FormMoviesComponent},

  { path: 'play/:url', component: PlayComponent }

  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}*/
