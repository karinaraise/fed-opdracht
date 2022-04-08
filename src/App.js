import React, { useState, useEffect } from 'react';
import './App.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import AddFavourites from './components/AddFavourites';
import RemoveFavourites from './components/RemoveFavourites';

const App = () => {
    const [movies, setMovies] = useState([]);
    const [favourites, setFavourites] = useState([]);
    const [searchValue, setSearchValue] = useState ('');

    const getMovieRequest = async (searchValue) => {
      const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=628f5e7e`;
      const response = await fetch (url);
      const responseJson = await response.json();

      if (responseJson.Search) {
        setMovies(responseJson.Search);
      }
    };

    useEffect(() => {
      getMovieRequest(searchValue);
    }, [searchValue]);

     useEffect(() => {
      const movieFavourites = JSON.parse(
        localStorage.getItem('react-fed-opdracht-favourites')
      );

      if (movieFavourites){
        setFavourites(movieFavourites);
      }
    }, []);

      const saveToLocalStorage = (items) => {
      localStorage.setItem('react-fed-opdracht-favourites', JSON.stringify(items));
    };

   const addFavouriteMovie = (movie) => {
      const newFavouriteList = [...favourites, movie];
      setFavourites(newFavouriteList);
      saveToLocalStorage(newFavouriteList);
    };
  
       const RemoveFavouriteMovie = (movie) => {
       const newFavouriteList = favourites.filter(
         (favourite) => favourite.imdbID !== movie.imdbID
         );
  
      setFavourites(newFavouriteList);
      saveToLocalStorage(newFavouriteList);
     };
    
    return (
        <div className='container-fluid movie-app'>
          <div className="header-image"></div>
            <div >
              <MovieListHeading heading='Movies & Series'/>
              <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
            </div>
            <div className='row'>
                <MovieList movies={movies} 
                handleFavouritesClick={addFavouriteMovie} 
                favouriteComponent={AddFavourites} />
            </div>
            
            <div >
              <MovieListHeading heading='Favourites'/>
            </div>
            <div className='row'>
                <MovieList
                  movies={favourites}
                  handleFavouritesClick={RemoveFavouriteMovie}
                  favouriteComponent={RemoveFavourites} 
                />
            </div>
        </div>
    );
};

export default App;