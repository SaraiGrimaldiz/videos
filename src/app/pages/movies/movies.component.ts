
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  @ViewChild('extrenos', { static: true }) movieListElement: ElementRef<HTMLDivElement> | undefined;

  movies = [
    {
      title: 'Cenicienta',
      poster: 'https://www.okchicas.com/wp-content/uploads/2023/06/15-mejores-adaptaciones-de-peliculas-que-hay-de-Cenicienta-15-495x700.jpg',
      url: 'https://www.youtube.com/embed/TWH3VfYBfaM?si=_jW1uzxsUsKKDb1b'
    },
    {
      title: 'Chestnut',
      poster: 'https://image.tmdb.org/t/p/w400/quDRdSE0gZ1Q1lpOkZVq4ek2kaQ.jpg',
      url: 'https://www.youtube.com/embed/YCKJOTcp1bY?si=del90alLza5PTDmL'

      
    },
    {
      title: 'Ratatuil',
      poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRja1g1qXyufxHSwta09GX7xk8E_gKkPGRPWQ&s',
      url: 'https://www.youtube.com/embed/uzcp1q4EqrY?si=Tb7ArNtwg8I-zzaI'

      
    },
    {
      title: 'Era de Hielo2',
      poster: 'https://i.pinimg.com/originals/73/d8/6f/73d86f617f58015b6205163410172df2.jpg',
      url: 'https://www.youtube.com/embed/7MPsPfUiMBY?si=mszXx8hvjsvx91g8'

      
    },
    {
      title: 'Un pequeño soldado',
      poster: 'https://images.justwatch.com/poster/310486461/s592/soldier-boy',
      url: 'https://www.youtube.com/embed/PEwsnrTiNCU?si=Ugch8LC9FHXkVQmf'

      
    },
    {
      title: 'Libro de la vida',
      poster: 'https://pics.filmaffinity.com/El_libro_de_la_vida-733755442-large.jpg',
      url: 'https://www.youtube.com/embed/Z8iBblJ4vH4?si=vaXirAUF4I8Sgn1Y'

      
    },
    {
      title: 'Ballerina',
      poster: 'https://es.web.img2.acsta.net/pictures/16/11/29/15/15/239672.jpg',
      url: 'https://www.youtube.com/embed/uHgG999LDt0?si=0VKhgUBWNl89Jfka'

      
    },
    {
      title: 'Mi vecino es un espia ',
      poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQoiWAxI2ehC2QTdmFd4qmJpZMcxYuVAoLcg&s',
      url: 'https://www.youtube.com/embed/JK_AaUvAE1M?si=DWg19narZhbxdNC2'

      
    },
    {
      title: 'Your Name',
      poster: 'https://w0.peakpx.com/wallpaper/380/636/HD-wallpaper-your-name-anime-mitsuha-taki-your-name.jpg',
      url: 'https://www.youtube.com/embed/hKXTC8_J4PA?si=6zgmBkYaAYvhsdgP'
      
    },

    {
      title: 'El viaje a agartha ',
      poster: 'https://sentirelarte.com/wp-content/uploads/2023/06/viaje-agarthacwf-2011-2.jpg?w=677&h=450&crop=1',
      url: 'https://www.youtube.com/embed/Of3O60aQiRw?si=FE7tZwOec3gjQ4-r'
      
    },

    {
      title: 'Ecuestria girl 1',
      poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgl3CseCoTNBfIQ3MlqRx1P0gMx1Hze1hON6wSg72BKni14KyjkRpTO4gO4clV0VM-ooM&usqp=CAU',
      url: 'https://www.youtube.com/embed/AZWJNXQAngM?si=BAULfy1tM0aRt8jp'
      
    },
    {
      title: 'Ecuestra girls raimbow rocks',
      poster: 'https://image.cdn0.buscalibre.com/5b59f89df4df73b2718b456b.__RS360x360__.jpg',
      url: 'https://www.youtube.com/embed/4kHa0xkc4Po?si=swxE0vgZsJkQVniC'
      
    },
    {
      title: 'Equestria Girls: La Leyenda de Everfree',
      poster: 'https://4.bp.blogspot.com/-DahzNkLDUKo/V_MAqHAb8gI/AAAAAAAA6X0/N6GkCO8CunM-vDQlliPfvNYr8zURkAxXQCLcB/s1600/My%2BLittle%2BPony%2BEquestria%2BGirls%2B-%2BLegend%2Bof%2BEverfree%2B%25282016%2529.jpg',
      url: 'https://www.youtube.com/embed/Cb04p5K_n28?si=jc_9SlZQepKHDIi0'
      
    },
    {
      title: 'La leyenda de las momias de Guanajuato ',
      poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvbL0E1QG5KqcR4WJ-Q7hGq3qK7liNFhP3o7CYnXcd7kcD1PLCA7Nr-4_evD20WxV0fRU&usqp=CAU',
      url: 'https://www.youtube.com/embed/M_jegFdppBA?si=54UlkVAJfwUzMAz0'
      
    },

    

    
  ];

  searchText = ''; // Propiedad para almacenar el texto de búsqueda
  selectedMovieIndex: number | null = null; // Índice de la película seleccionada

  constructor(private router: Router) {}

  ngOnInit(): void {}

  reproductor(movieUrl: string): void {
    // Aquí puedes redirigir a una página de reproducción
    this.router.navigate(['/play', movieUrl]);
  }

  // Método para filtrar películas basadas en el texto de búsqueda
  get filteredMovies() {
    return this.movies.filter(movie =>
      movie.title.toLowerCase().includes(this.searchText.toLowerCase())
    );}


    // Método para realizar la búsqueda
  search() {
    // Reiniciar la selección de película al realizar una nueva búsqueda
    this.selectedMovieIndex = null;

    // Puedes agregar lógica adicional aquí si es necesario
    console.log('Realizando búsqueda: ', this.searchText);
  }

  // Método para seleccionar una película después de la búsqueda
  selectMovie(index: number) {
    this.selectedMovieIndex = index;

    // Desplazar hacia la película seleccionada
    if (this.movieListElement && this.movieListElement.nativeElement) {
      this.movieListElement.nativeElement.children[index].scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}


