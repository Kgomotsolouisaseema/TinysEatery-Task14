//FUNCTION/ACTION TO HANDLE STATE OF  SETTING USER
export const setUser = (user)=>{
    return{
        type: 'SET_USER',
        payload: user,
    };
};
//FUNCTION TO HANDLE STATE OF  CLEARING USER  MENU CHOICES ?
export const clearUser = ()=>{
    return{
        type: 'CLEAR_USER',
    };
};

//FUNCTION TO HANDLE STATE OF LOGIN
export const LoginUser = ()=>{
    return {
        type: 'LOGIN_USER',
    };
};

//FUNCTION TO HANDLE STATE OF LOGOUT
export const logoutUser =() =>{
    return{
        type: 'LOGOUT_USER'
    };
};