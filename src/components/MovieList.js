import React from 'react';
import './MovieList.css';
import Image from '../images/posterzonderposter.png';

const MovieList = (props) => {
    const FavouriteComponent = props.favouriteComponent;
    
    return (
        <>
            {props.movies.map((movie, index) => (
                <div className='image-container'>
                    {movie.Poster !== 'N/A' ?  <img src={movie.Poster} alt='movie' className='poster'></img> : <img src={Image} alt='movie' className='geenPoster'></img>}
                    <div 
                        onClick={()=> props.handleFavouritesClick(movie)}
                        className='overlay'
                    >
                        <favouriteComponent />
                    </div>
                </div>
            ))}
        </>
    );
};

export default MovieList;