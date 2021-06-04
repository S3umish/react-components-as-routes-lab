import React from 'react';
import { movies } from '../data';

const Movies = () => {

  // const renderMovies = () => {
  //   return movies.map((movie, index) => {
  //     return
  //      <div key= {index}>
  //         <h1>Name:{movie.title}</h1>
  //         <h2>Time: {movie.time}</h2>
  //         <p>Genres</p>
  //           <ul>
  //             {movie.genres.map((genre)=> {
  //               <li> key={index} {genre}</li>
  //             })}
  //           </ul>
  //     </div>
  //   })
  // }
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie, index) => (
        <div key={index}>
          <h3>Name: {movie.title}</h3>
          <h4>Time: {movie.time}</h4>
          <p>Genres</p>
          <ul>
            {movie.genres.map((genre, index)=>(
              <li key={index}>{genre}</li>
            ))}
          </ul>
        </div>

      ))}
    </div>  



    
     
  );
};

export default Movies;
