// import {configureStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './cartSlice';
// import rootReducer from '../redux/rootReducer'
import cartReducer from './cartReducer';


const store =configureStore({
    
    reducer:{
        // rootReducer,cartSlice,
        cart: cartSlice,
    }
})

export default store;