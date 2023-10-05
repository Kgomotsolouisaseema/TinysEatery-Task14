const initialState = {
    user: null,
    isLoggedIn : false,
};

const authReducer = (state = initialState,action)=>{
    switch (action.type){
        case 'SET_USER':  //in the case that the user is logged in ,add user data form payload and set islogged in to true . user is looged in , set the stae and return the items they chose
            return{
                ...state,
                user:action.payload,
                isLoggedIn:true,
            };
            case 'CLEAR_USER':  //USER IS LOGGED OUT , CLEAR THIER INFORMATION FORM STATE
                return {
                    ...state,
                    user:null,
                    isLoggedIn:false,
                };
            case 'LOGIN_USER': //USER IS LOGGED IN AND AUTHENTICATED BY APP
                return{
                    ...state,
                    isLoggedIn:true,
                };
            case 'LOGOUT_USER': //USER IS LOGGED OUT AND NOT AUTHENTICATED BY APP
                return{
                    ...state,
                    isLoggedIn:false,
                };
                default:
                    return state;
    }
};

export default authReducer;