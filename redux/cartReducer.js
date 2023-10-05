const initialState = {
    items: [] //in array of items in the cart 
};

const cartReducer =(state = initialState, action)=>{
    switch (action.type){
        case 'REMOVE_FROM_CART':
            const updateItems = state.items.filter(item => item.id !== action.payload.itemId);
            return{
                ...state,
                items:updateItems,
            };
            //OTHER CASES LIKE UPDATING QUANTITIES ON MENU ,ADDING ITEMS ECT
            default:
                return state;
    }
};

export default cartReducer;