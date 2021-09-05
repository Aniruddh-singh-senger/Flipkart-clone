
import * as actionTypes from '../constants/productConstant';


export const getProductsReducer = (state = {products: []}, action) => {
    switch(action.type) {
        case actionTypes.GET_PRODUCT_SUCCESS:
            return { products: action.payload }
        case actionTypes.GET_PRODUCT_FAIL:
            return { error: action.payload }
        default:
            return state
    }
};

export const getProductDetailsReducer = (state = { product: {}}, action) => {
    
    console.log('Hi', action.type)
    switch(action.type){
       
        case actionTypes.GET_PRODUCT_DETAIL_SUCCESS:
            return { loading: false, product: action.payload }
        case actionTypes.GET_PRODUCT_DETAIL_FAIL:
            return {
                loading: false,
                error: action.payload
            }
      
        default:
            return state
    }
}