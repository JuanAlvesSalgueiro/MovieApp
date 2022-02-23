import React from 'react';


import { MovieCard } from '../MovieCard/MovieCard';

import './MovieGrid.css'


export const MovieGrid = ({movie}) => {
  

  
  
  
  return (
    <>
      <div className="card-grid">  

        {
          movie.map( movie => (
              <MovieCard 
                  
                  key={ movie.id }
                  { ...movie }
              />
          ))
        }

      </div>
      

      
      
    </>
  )
}
