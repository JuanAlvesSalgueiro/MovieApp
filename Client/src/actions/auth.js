//const baseUrl = process.env.BACKEND_URL;


const baseUrl = 'http://localhost:8080';
const postNewUser = ( endpoint, data, method ) => {
    
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

export const startRegister = ( userName, email, password ) => {
    return async( dispatch ) => {
        
        const resp = await postNewUser( 'api/auth/register', { userName, email, password }, 'POST' );
        
        const body = await resp.json();
        if (body.ok){
            
            dispatch( login({
                userName: body.usuario.userName,
                email: body.usuario.email,
                password: body.usuario.password,
                authenticated: true
            }));
        } else {
            console.log(body.msg)
            
        }
    }
}

export const startLogin = ( userName, password ) => {
    return async( dispatch ) => {
        
        const resp = await postNewUser( 'api/auth/login', { userName, password }, 'POST' );
        
        const body = await resp.json();
        if (body.ok){
            
            dispatch( login({
                userName: body.user.userName,
                email: body.user.email,
                password: body.user.password,
                authenticated: true
            }));
            
        } else {
            console.log("Hubo un error con el mail o el usuario");
        }
    }
}



const login = ( user ) => ({
    type: "authLogin",
    payload: user
});