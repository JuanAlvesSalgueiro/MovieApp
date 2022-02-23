import { useState, useEffect } from 'react'
import { getPopularMovies } from '../helpers/getPopularMovies'


export const usePopularMovies = ( page ) => {
    
    const [state, setState] = useState({
        data: [],
    });

    useEffect( () => {

        getPopularMovies( page )
            .then( movie => {
                
                setState({
                    data: movie,
                });
            })

    }, [page])


    

    return state; // { data:[], loading: true };
}   