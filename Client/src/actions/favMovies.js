
import { useSelector } from "react-redux";

//const {userName, favMovies} = useSelector(state => state.favMovies);
//console.log(userName, favMovies);


const postFavMovies = ( endpoint, data, method ) => {
    const baseUrl = 'http://localhost:8080';
    const url = `${ baseUrl }/${ endpoint }`;
    console.log(data);
    if ( method === 'POST' ) {
        return fetch(url,{
            method,
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify( data )
        });
    }
}

const addFavMovieToDb = async() => {
        const userName = "aff";
        const favMovies = {"sssaff":"hola"};
        
        const resp = await postFavMovies( 'api/addFavMovies', { userName, favMovies }, 'POST' );
        
        const body = await resp.json();
        if (body.ok){
            console.log(body.user, "fav movies sucessfully uploaded to the db");
            
            
        } else {
            console.log("fav movies UNsucessfully uploaded to the db")
        }
    
}




export const addFavMovie = ( id, img, title ) => {
    //addFavMovieToDb();
     
    return { type: 'addFavMovie' , payload: { id, img, title }};
}

export const removeFavMovie = ( id, img, title ) => {
    
     
    return { type: 'removeFavMovie' , payload: { id, img, title }};
}

