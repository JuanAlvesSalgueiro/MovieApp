const baseUrl = 'http://localhost:8080';

export const postFavMovies = ( endpoint, data, method ) => {
    
    const url = `${ baseUrl }/${ endpoint }`;
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

export const addFavMovieToDb = async( userName, favMovies) => {
    
        
        const resp = await postFavMovies( 'api/addFavMovies', { userName, favMovies }, 'POST' );
        
        const body = await resp.json();
        if (body.ok){
            console.log( "fav movies sucessfully uploaded to the db");
            
            
        } else {
            console.log("fav movies UNsucessfully uploaded to the db")
        }
    
}