// crud-movies.component.ts
import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';
import { MovieService } from 'src/app/services/movie.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-crud-movies',
  templateUrl: './crud-movies.component.html',
  styleUrls: ['./crud-movies.component.css']
})
export class CrudMoviesComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private movieService: MovieService, public authService: AuthService) {}

  async ngOnInit() {
    this.movies = await this.movieService.getMovies();
  }

  async addMovie() {
    const newMovie: Movie = {
      title: 'New Movie',
      description: 'Director Name',
      category: '2024-01-01',
      poster: 'Genre',
      video: 'jjdjj'
    };
    await this.movieService.addMovie(newMovie);
    this.movies = await this.movieService.getMovies(); // Refresh the list
  }

  async deleteMovie(id: string) {
    await this.movieService.deleteMovie(id);
    this.movies = await this.movieService.getMovies(); // Refresh the list
  }
}


/*import { Component } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-crud-movies',
  templateUrl: './crud-movies.component.html',
  styleUrls: ['./crud-movies.component.css']
})
export class CrudMoviesComponent {
  movies: Movie[] = [];

  constructor(private movieService: MovieService) {}

  async ngOnInit() {
    this.movies = await this.movieService.getMovies();
  }

  async addMovie() {
    const newMovie: Movie = {
      title: 'New Movie',
      description: 'Director Name',
      category: '2024-01-01',
      poster: 'Genre',
      video: 'jjdjj'
    };
    await this.movieService.addMovie(newMovie);
    this.movies = await this.movieService.getMovies(); // Refresh the list
  }

  async deleteMovie(id: string) {
    await this.movieService.deleteMovie(id);
    this.movies = await this.movieService.getMovies(); // Refresh the list
  }
}*/
