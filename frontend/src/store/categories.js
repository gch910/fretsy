import { csrfFetch } from "./csrf";

const SET_PRODUCTS = "/category/setCategory";

const setProducts = (products) => {
  return {
    type: SET_PRODUCTS,
    payload: products,
  };
};

export const products = (categoryId) => async (dispatch) => {
    const res = await csrfFetch(`/api/categories/${categoryId}`);

    const data = await res.json();

    dispatch(setCategory(data.products))
    return res;
}

const initialState = {
  products: null,
  category: null,
};

const productsReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_PRODUCTS: {
      newState = {};
      action.payload.forEach(product => {
          newState[product.id] = product
      })
      return newState;
    }
    default:
      return state;
  }
};

export default productsReducer;
