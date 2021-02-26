import { csrfFetch } from "./csrf";

const SET_PRODUCTS = "/products/setProducts";
const PRODUCTS_CATEGORY = "/products/productsCategory"
const PRODUCTS_CATEGORY2 = "/products/productsCategory2"
const SET_PRODUCT = "/products/setProduct"
const PRODUCT_SHOP = "/products/productShop"

const setProducts = (products) => {
  return {
    type: PRODUCTS_CATEGORY,
    payload: products,
  };
};

const setProduct = (product, shop) => {
  return {
    type: SET_PRODUCT,
    payload: { product, shop }
  }
}

 const productsByCategory = (products) => {
  return {
    type: PRODUCTS_CATEGORY,
    payload: products,
  };
};
 const productsByCategory2 = (products) => {
  return {
    type: PRODUCTS_CATEGORY2,
    payload: products,
  };
};

// const productShop = (shop) => {
//   return {
//     type: PRODUCT_SHOP,
//     payload: shop,
//   }
// }



export const getProductsByCategory = (categoryId) => async (dispatch) => {
  const res = await csrfFetch(`/api/products/categories/${categoryId}`)

  const data = await res.json();

  dispatch(productsByCategory(data.productsByCategory))
  return data;
}
export const getProductsByCategory2 = (categoryId) => async (dispatch) => {
  const res = await csrfFetch(`/api/products/categories/${categoryId}`)

  const data = await res.json();

  dispatch(productsByCategory2(data.productsByCategory))
  return data;
}



export const getProduct = (productId) => async (dispatch) => {
  const res = await csrfFetch(`/api/products/${productId}`);
  

  const data = await res.json();
  
  console.log("produict and shop data", data)

  dispatch(setProduct(data.product, data.shop));
  return data;
}

// export const getProductShop = (shopId) => async (dispatch) => {
//   const res = await csrfFetch(`/api/products/shops/${shopId}`)

//     const data = await res.json();
//     console.log("this is the data", data)

//     dispatch(productShop(data.shop))
//     return data;
// }

// export const products = () => async (dispatch) => {
//     const res = await csrfFetch(`/api/products`);

//     const data = await res.json();
//     console.log("data:", data);
//     dispatch(setCategories(data.products));
//     return res;
// }

const initialState = {}

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
      newState = {...state}
      newState.category1 = [...action.payload];
    //   action.payload.forEach(product => {
    //     newState.category1[product.id] = product
    // })
      return newState
    }
    case PRODUCTS_CATEGORY2: {
      newState = {...state};
      newState.category2 = [...action.payload]
      return newState
    }
    case SET_PRODUCT: {
      newState = [{...action.payload}]
      return newState;
    }
    case PRODUCT_SHOP: {
      newState = [{...state}, ...action.payload]
    }
    default:
      return state;
  }
};

export default productsReducer;