


export const getPopularMovies = async( page ) => {

    const url = `https://api.themoviedb.org/3/movie/popular?api_key=30ed9b7672795045f8fbff2a8390adab&page=${page}`
    const resp = await fetch( url );
    const  { results }  = await resp.json();
    const movies = results.map(results => {
        return {
            id: results.id,
            img: results.poster_path,
            title: results.original_title,

        }
    })
   
 
    return movies;


}