import {createAction, createReducer} from '@reduxjs/toolkit';
import axios from 'axios';

const GET_CATEGORIES = 'GET_CATEGORIES';
const ADD_CART = 'ADD_CART';

const intitialState = {
   categories: [],
   cart: [],
}

export const getCategories = () =>{
    let action = createAction(GET_CATEGORIES)
    return (dispatch) =>{
        axios('https://fakestoreapi.com/products/categories')
        .then(({data}) => dispatch(action(data)))
    }
}

export const addCart = createAction(ADD_CART);


export default createReducer(intitialState, (builder) =>{
    builder
    .addCase(GET_CATEGORIES, (state, action)=>{
            state.categories = action.payload
    })
    .addCase(ADD_CART, (state, action)=>{
        const idx = state.cart.findIndex(item => item.id === action.payload.id);
        if(idx > -1){
            state.cart[idx].count = state.cart[idx].count + 1
            state.cart = [...state.cart]
        } else {
            state.cart = [
                {
                    ...action.payload,
                    count: 1,
                },
                ...state.cart
            ]
        }
    })

})
