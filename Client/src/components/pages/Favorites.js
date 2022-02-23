import React from 'react';
import { useSelector } from 'react-redux';
import '../../App.css';
import { MovieGrid } from '../MovieGrid/MovieGrid';
import { FavMovieGrid } from '../FavMovieGrid/FavMovieGrid';
import './home.css';
export default function Favorites() {
  const { movies } = useSelector(state => state.favMovies);
  
  return (

    <div className='favorites'>
      
      
    </div>

  )}
