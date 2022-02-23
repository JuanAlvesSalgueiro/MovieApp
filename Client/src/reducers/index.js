import { combineReducers } from "redux";
import authReducer from "./authReducer";
import favMoviesReducer from "./favMoviesReducer";

const rootReducers = combineReducers({
        auth: authReducer,
        favMovies: favMoviesReducer 
    });
 export default rootReducers;