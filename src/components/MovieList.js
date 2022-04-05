import React from 'react';
import './MovieList.css';
import Image from '../images/posterzonderposter.png';

function MovieList(props) {


    return (
        <>
            {props.movies.map((movie, index) => (
                <div className='image-container'>
                   
                    { movie.Poster !== 'N/A' ?  <img src={movie.Poster} alt='movie' className='poster'></img> : <img src={Image} alt='moviese' className='geenPoster'></img>}

                    <div className='overlay'></div>
                </div>
            ))}
        </>
    );
}

export default MovieList;