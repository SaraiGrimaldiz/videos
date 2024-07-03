import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Movie } from 'src/app/models/movie.model';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-form-movies',
  templateUrl: './form-movies.component.html',
  styleUrls: ['./form-movies.component.css']
})
export class FormMoviesComponent {
  movie: Movie = {
    title: '',
    description: '',
    category: '',
    poster: '',
    video: ''
  };

  constructor(private movieService: MovieService) {}

  async submitMovie() {
    try {
      const res = await this.movieService.addMovie(this.movie);
      console.log('Movie added successfully', res);
    } catch (err) {
      console.error('Error adding movie', err);
    }
  }
}


