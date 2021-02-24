import { csrfFetch } from "./csrf";

const SET_PRODUCTS = "/products/setProducts";
const PRODUCTS_CATEGORY = "/products/productsCategory"
const SET_PRODUCT = "/products/setProduct"

const setProducts = (products) => {
  return {
    type: PRODUCTS_CATEGORY,
    payload: products,
  };
};

const setProduct = (product) => {
  return {
    type: SET_PRODUCT,
    payload: product
  }
}

export const productsByCategory = (products) => {
  return {
    type: PRODUCTS_CATEGORY,
    payload: products,
  };
};

export const getProductsByCategory = (categoryId) => async (dispatch) => {
  const res = await csrfFetch(`/api/products/categories/${categoryId}`)

  const data = await res.json();

  dispatch(productsByCategory(data.productsByCategory))
  return data;
}

export const getProduct = (productId) => async (dispatch) => {
  const res = await csrfFetch(`/api/products/${productId}`);

  const data = await res.json();
  console.log("this is the data", data)

  dispatch(setProduct(data.product));
  return data;
}

// export const products = () => async (dispatch) => {
//     const res = await csrfFetch(`/api/products`);

//     const data = await res.json();
//     console.log("data:", data);
//     dispatch(setCategories(data.products));
//     return res;
// }

const initialState = [];

const productsReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    // case SET_PRODUCTS: {
    //   newState = {};
    //   action.payload.forEach(product => {
    //       newState[product.id] = category 
    //   })
  
    //   return newState;
    // }
    case PRODUCTS_CATEGORY: {
      newState = [...action.payload];
      return newState
    }
    case SET_PRODUCT: {
      newState = action.payload
      return newState;
    }
    default:
      return state;
  }
};

export default productsReducer;