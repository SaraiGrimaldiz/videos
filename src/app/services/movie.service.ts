import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.model';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private url = environment.firebaseConfig.databaseURL;

  constructor() {}

  // Create
  async addMovie(movie: Movie): Promise<any> {
    const res = await fetch(`${this.url}/movies.json`, {
      method: "POST",
      body: JSON.stringify(movie),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8'
      }
    });
    return res.json();
  }

  // Read all
  async getMovies(): Promise<Movie[]> {
    const res = await fetch(`${this.url}/movies.json`);
    const data = await res.json();
    return data ? Object.keys(data).map(key => ({ id: key, ...data[key] })) : [];
  }

  // Read by ID
  async getMovieById(id: string): Promise<Movie | null> {
    const res = await fetch(`${this.url}/movies/${id}.json`);
    const data = await res.json();
    return data ? { id, ...data } : null;
  }

  // Update
  async updateMovie(id: string, movie: Movie): Promise<any> {
    const res = await fetch(`${this.url}/movies/${id}.json`, {
      method: "PATCH",
      body: JSON.stringify(movie),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8'
      }
    });
    return res.json();
  }

  // Delete
  async deleteMovie(id: string): Promise<any> {
    const res = await fetch(`${this.url}/movies/${id}.json`, {
      method: "DELETE",
    });
    return res.json();
  }
}