import { FETCH_PRODUCTS_LOADING, FETCH_PRODUCTS_SUCCESS } from "../actions/actions";

const initialProductState = { products: [], loading: false, error: null };
export const productReducer=(state=initialProductState,action)=>{
    switch(action.type){
        case FETCH_PRODUCTS_LOADING:
            return{...state,loading:true}
        case FETCH_PRODUCTS_SUCCESS:
            return {...state,products:action.payload,loading:false}
        default:
            return state;
    }
}
