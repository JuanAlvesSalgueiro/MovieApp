const initialState = {
    movies: [],
};



const favMoviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case "addFavMovie":
            ;
            return {
                ...state,
                movies: [
                    ...state.movies,
                    action.payload
                ]
            }
        case "removeFavMovie":
            return {
                ...state,
                movies: state.movies.filter(
                    movie => ( action.payload.id !== movie.id )
                )
            }   
        case "loadFavMovies":
            
            return state; 
        default:
            return state;
    }
}

export default favMoviesReducer;