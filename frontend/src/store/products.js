import { csrfFetch } from "./csrf";

const SET_PRODUCTS = "/products/setProducts";

const setProducts = (products) => {
  return {
    type: SET_PRODUCTS,
    payload: products,
  };
};

export const products = () => async (dispatch) => {
    const res = await csrfFetch(`/api/products`);

    const data = await res.json();
    console.log("data:", data);
    dispatch(setCategories(data.products));
    return res;
}

const initialState = {};

const productsReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_PRODUCTS: {
      newState = {};
      action.payload.forEach(product => {
          newState[product.id] = category 
      })
    // newState = Object.assign({}, state);
    // newState.categories = action.payload;
      
      return newState;
    }
    default:
      return state;
  }
};

export default productsReducer;