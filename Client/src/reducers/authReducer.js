
const initialState = {
    userName: "",
    email: "",
    password: "",
    favMovies: {},
    authenticated: false
};

const authReducer = (state  = initialState, action) => {
    switch (action.type) {
        case 'authLogin':
            
            return { ...state, ...action.payload } ;
        case 'favMovies':    
            return { ...state.favMovies }
        default:
            return state;
    }
}

export default authReducer;