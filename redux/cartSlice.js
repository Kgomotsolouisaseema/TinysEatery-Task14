//IMPORTING creatSlice FROM REDUX TOOLKIT, HELPS SIMPLIFY THE PORCESS OF CREATING REDUX SLICES
const { createSlice } = require("@reduxjs/toolkit");
//CREATING A cartSlice USING createSlice 
const cartSlice = createSlice({
//THIS SETS THE NAME OF OUR SLICE WHICH IS CART
    name: "cart",
//THE INITIAL STATE OF OUR  cartSlice IS AN EMPTY ARRAY
    initialState: {
        items:[],
    },
//DEFINING OUR REDUCERS FUNCTIONS : addtoCart,removeFromCart , IncreamentQuantity , decreamentQuantiy    
    reducers: {
//CHECKS IF AN ITEM WITH THE SAME NAME AS PAYLOAD EXSISTS IN CART, IT YES IT INCREAMENTS COUNT BY 1 IF NOT IT ADDS AND STARTS AT 1
        addToCart: (state, actions) => {
            state.items = [...state.items, actions.payload]
             console.log( "add to cart slice at cartslice", state.items)
            // const isAvailable = state.find(
            //     (value) => value.name == actions.payload.name,
               
            // );
            // if (isAvailable) {
            //     actions.payload["quantity"] + 1;
            // } else {
            //     state.push({ ...actions.payload, quantity:1 });
            // }
        },
//FUNCTION REMOVES ITEMS FROM CART BY CREATING A NEW LIST OF ITEMS THAT DONT MATCH THE PROVIDED PAYLOADS NAME
        removeFromCart: (state, actions) => {
            const newList = state.filter(
                (value) => value.name != actions.payload.name
            );
            return (state - newList);
        },
//FUNCTION FINDS AN ITEM IN CART AND INCREASES IT QUANITY BY 1 IF IT EXISTS 
        incrementQuantity: (state, actions) => {
            const isAvailable = state.find(
                (value) => value.name == actions.payload.name
            );
            if (isAvailable) {
                isAvailable.quantity++;
            } else {
                console.log("not available");
            }
        },
//FUNCTION FINDS AN ITEM IN CART AND DECREASE ITS QUANTIY BY 1 , BUT ENSURES THE QUANTIY IS NOT BELOW 1
        decrementQuantity: (state, actions) => {
            const isAvailable = state.find(
                (value) => value.name == actions.payload.name
            );
            if (isAvailable.quantity == 1) {
                isAvailable.quantity = 1;
            } else {
                isAvailable.quantity--;
            }
        },
    },
});
//WE EXPORT THE ACTION CREATORS FROM CART SLICE.ACTIONS OBJECT . THESE WILL BE USED TO DISPATCH ACTIONS TO MODIFY STATE
export const {
    addToCart,
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
} = cartSlice.actions;

export const selectCartItems = state =>state.cart.items
//EXPORTING THE REDUCER FUNCTION FROM `cartSlice.reducer`. THE REDUCER SPECIFIES HOW THE STATE SHOULD BE UPDATED BASED ON DISPATCHED ACTIONS
export default cartSlice.reducer;

//createSlice FUNCTION IN REDUC TOOLKIT MAKES IT EASIER TO CREATE PARTS OF YOUR APPLICATION STATE (CALLED SLICES). 
//IT DOES THIS BY AUTOMATICALLY GENERATING THE ACTIONS AND THE REDUCERS NEEDED TO MANAGE THE PART OF THE STATE

//ACTIONS : INSTRUCTIONS THAT TELL REDUX WHAT HAPPEND IN YOUR APP creatSlice TELLS YOU WHAT HAPPEND
//REDUCERS : A FUNCTION THAT SPECIFIES HOW THE STATE CHANGES IN RESPONSE TO ACTIONS, LIKE A CHEF FOLLOWING A RECIPE 