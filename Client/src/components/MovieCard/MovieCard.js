import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addFavMovie, removeFavMovie } from '../../actions/favMovies';
import { addFavMovieToDb } from '../../helpers/addFavMovies';
import './MovieCard.css'


export const MovieCard = ({ id, title, img }) => {

    const { movies } = useSelector(state => state.favMovies);
    
    let initialState = false;
    for (let i of movies) {
      if (i.id === id){
          
        initialState = true
      }
    }
    

    const [Fav, setFav] = useState(initialState);

    

    

    
    
    

    const dispatch = useDispatch();

    const handleClick = () => {
      
      if ( !Fav ){
        dispatch(addFavMovie(id, img, title));
      } else {
        dispatch(removeFavMovie(id, img, title));
      }
      
      
      setFav(!Fav);
      
    }
    //mejorar esto
    
    
    return (
      
        <div className="card">
            <img
              src={`https://image.tmdb.org/t/p/w200${img}`}
              alt={`${title} Poster`}
            />

            <div className='card-overlay'>
              < h2>{title}</h2>
              {
                Fav ? <i onClick={()=>{handleClick(img, title)}} className="fa-solid fa-star star"></i>
                    : <i onClick={()=>{handleClick(img, title)}} className="fa-solid fa-star"></i>
              }
              
            </div>

        </div>

      
    );
  };