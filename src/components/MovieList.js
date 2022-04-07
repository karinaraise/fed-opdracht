import React from 'react';
import './MovieList.css';
import Image from '../images/posterzonderposter.png';

function MovieList(props) {

    return ( 
    <>
            {props.movies.map((movie, index) => (
                <div className='image-container'>
                   {/* <h3>{ movie.Title }</h3> */}
                    { movie.Poster !== 'N/A' ?  <img src={movie.Poster} alt='movie' className='poster'></img> : <img src={Image} alt='movie' className='geenPoster'></img>}

                    <div onClick={ ()=> props.handleFavouritesClick(movie)}className='overlay'>
                        <h3 className='hoverText'>{movie.Title} <br></br> <br></br>{movie.Year}</h3>
                        <FavouriteComponent />
                    </div>
                </div>
            ))}
        </>
    );
};

export default MovieList;