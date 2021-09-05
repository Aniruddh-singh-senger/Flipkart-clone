import * as actionTypes from '../constants/productConstant';
import axios from 'axios';

export const getProducts = () => async (dispatch) => {
    try {
        console.log('Hiiiiii')
        const { data } = await axios.get(`http://localhost:8000/products`);
        dispatch({ type: actionTypes.GET_PRODUCT_SUCCESS, payload: data });

    } catch (error) {
        dispatch({ type: actionTypes.GET_PRODUCT_FAIL, payload: error.response });
    }
};

export const getProductDetails = (id) => async (dispatch) => {
    try {
        
        const { data } = await axios.get(`http://localhost:8000/product/${id}`);
        console.log(data);

        dispatch({ type: actionTypes.GET_PRODUCT_DETAIL_SUCCESS, payload: data });

    } catch (error) {
        dispatch({ type: actionTypes.GET_PRODUCT_DETAIL_FAIL, payload: error.response});

    }
};

