import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addFavMovie, removeFavMovie } from '../../actions/favMovies';
import { addFavMovieToDb } from '../../helpers/addFavMovies';
import './FavMovieCard.css'

export const FavMovieCard = ({ id, title, img, userName }) => {
    
    
    const { movies } = useSelector(state => state.favMovies);
    const dispatch = useDispatch();

    const handleClick = () => {
      
      dispatch(removeFavMovie(id, img, title));
      
      
      
      
      
    }
    addFavMovieToDb(userName, movies); 
    
    return (
      
        <div className="card">
            <img
              src={`https://image.tmdb.org/t/p/w200${img}`}
              alt={`${title} Poster`}
            />

            <div className='card-overlay'>
              < h2>{title}</h2>
              
              
            </div>

        </div>

      
    );
  };