export const removeFromCart = (itemId)=>{
    return{
        type:'REMOVE_FROM_CART',
        payload: {
            itemId:itemId,
        },
    };
};