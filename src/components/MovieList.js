import React from 'react';
import './MovieList.css';

const MovieList = (props) => {
    return (
        <>
            {props.movies.map((movie, index) => (
                <div className='image-container'>
                    <img src={movie.Poster} alt='movie' className='poster'></img>
                    <div className='overlay'></div>
                </div>
            ))}
        </>
    )
}

export default MovieList;