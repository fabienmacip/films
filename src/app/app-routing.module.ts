import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { MovieFormComponent } from './movie-list/movie-form/movie-form.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { SingleMovieComponent } from './movie-list/single-movie/single-movie.component';

const routes: Routes = [
  { path: 'auth/signup', component: SignupComponent },
  { path: 'auth/signin', component: SigninComponent },
  { path: 'movies', component: MovieListComponent },
  { path: 'movies/new', component: MovieFormComponent },
  { path: 'movies/view/:id', component: SingleMovieComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
