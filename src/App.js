import React, { useState, useEffect } from 'react';

import './App.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';


const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState ('');

    const getMovieRequest = async () => {
      const url = "http://www.omdbapi.com/?s=avengers&apikey=628f5e7e"
      const response = await fetch (url);
      const responseJson = await response.json();

      console.log(responseJson);
      setMovies(responseJson.Search);
    };

    useEffect(() => {
      getMovieRequest ();
    }, []);

    return (
    <div className='container-fluid movie-app'>
        <div className='search'>
          <MovieListHeading heading='Movies'/>
          <SearchBox/>
          </div>

       
        <div className='row'>
            <MovieList movies={movies} />

        </div>
    </div>
    );
};

export default App;
  