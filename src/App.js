import React, { useState, useEffect } from 'react';

import './App.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import Youtube from './components/Youtube';

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState ('');

    const getMovieRequest = async (searchValue) => {
      const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=628f5e7e`;
      const response = await fetch (url);
      const responseJson = await response.json();

      if(responseJson.Search) {
      setMovies(responseJson.Search);
      }
    };

    useEffect(() => {
      getMovieRequest (searchValue);
    }, [searchValue]);

    return (
        <div className='container-fluid movie-app'>
          <div className="header-image"></div>
            <div >
              <MovieListHeading heading='Movies & Series'/>
              <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
            </div>
          
            <Youtube/>

            <div className='row'>
                <MovieList movies={movies} />
            </div>
        </div>
    );
};

export default App;