import React from 'react';
import { useSelector } from 'react-redux';




import './FavMovieGrid.css'

import { FavMovieCard } from '../FavMovieCard/FavMovieCard';
export const FavMovieGrid = ({movie}) => {
  
  const { userName } = useSelector(state => state.auth);
  
  
  
  return (
    <>
      <div className="card-grid">  

        {
          movie.map( movie => (
              <FavMovieCard
                  userName = { userName }
                  key={ movie.id }
                  { ...movie }
              />
          ))
        }

      </div>
      

      
      
    </>
  )
}
