// import {configureStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
// import cartSlice from './cartSlice';
import rootReducer from '../redux/rootReducer'


const store =configureStore({
    
    reducer:{
        rootReducer
    }
})

export default store;