import React, { useState } from 'react';
import { usePopularMovies } from '../../hooks/usePopularMovies';


import { MovieGrid } from '../MovieGrid/MovieGrid';

import './home.css';

const initialState = 1;



export default function Home() {
  
  
  const [Page, setPage] = useState(initialState);

  const handlePreviousClick = () => {
    if (Page === 1) {
      return;
    }
    setPage(Page - 1);
  }

  const handleNextClick = () => {
    setPage(Page + 1);
  }
  const { data:movie } = usePopularMovies(Page);
  
  return (
  
    <div className='home'>
        
        <MovieGrid movie={movie}/>

      <div className='btn-container'>

        <button onClick={handlePreviousClick} className='btn-page'>
          <span></span>
          <span></span>
          <span></span>
          <span></span> Previous Page
        </button>
        
        <button onClick={handleNextClick} className='btn-page'>
          <span></span>
          <span></span>
          <span></span>
          <span></span> Next Page
        </button>

      </div>

    </div>
    
  );
}
