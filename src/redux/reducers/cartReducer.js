import { ADD_TO_CART } from "../actions/actions";

const initialCartState = { items: [] };

export const cartReducer=(state=initialCartState,action)=>{
    switch(action.type){
        case ADD_TO_CART:
            return{...state,items:[...state.items,action.payload]}
        default:
            return state
    }
}