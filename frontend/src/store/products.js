import { csrfFetch } from "./csrf";

const PRODUCTS_CATEGORY = "/products/productsCategory";
const PRODUCTS_CATEGORY2 = "/products/productsCategory2";
const ALL_PRODUCTS_CATEGORY = "/products/allProductsCategory";
const SET_PRODUCT = "/products/setProduct";
const PRODUCTS_SHOP = "/products/productsShop";
const PRODUCTS_SHOP2 = "/products/productsShop2";
const PRODUCTS_SHOP3 = "/products/productsShop3";
const SEARCH_RESULTS = "/products/searchResults";

const setProduct = (product, shop) => {
  return {
    type: SET_PRODUCT,
    payload: { product, shop },
  };
};

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
const allProductsByCategory = (products, categoryName) => {
  return {
    type: ALL_PRODUCTS_CATEGORY,
    payload: { products, categoryName },
  };
};

const productsByShop = (products) => {
  return {
    type: PRODUCTS_SHOP,
    payload: products,
  };
};
const productsByShop2 = (products) => {
  return {
    type: PRODUCTS_SHOP2,
    payload: products,
  };
};
const productsByShop3 = (products) => {
  return {
    type: PRODUCTS_SHOP3,
    payload: products,
  };
};

const searchResults = (products) => {
  return {
    type: SEARCH_RESULTS,
    payload: products,
  };
};

export const unloadProductsByCategory1 = (products = []) => {

  return {
    type: PRODUCTS_CATEGORY,
    payload: products,
  };
};
export const unloadProductsByCategory2 = (products = []) => {
  return {
    type: PRODUCTS_CATEGORY2,
    payload: products,
  };
};
export const unloadAllProductsByCategory = (products = []) => {
  return {
    type: ALL_PRODUCTS_CATEGORY,
    payload: products,
  };
};
export const getProductsByCategory = () => async (dispatch) => {
  const res = await csrfFetch(`/api/products/random-category`);

  const data = await res.json();

  dispatch(productsByCategory(data.productsByCategory1));
  dispatch(productsByCategory2(data.productsByCategory2));
  return data;
};

export const getAllProductsByCategory = (categoryId) => async (dispatch) => {
  const res = await csrfFetch(`/api/products/categories/${categoryId}`);

  const data = await res.json();

  dispatch(allProductsByCategory(data.productsByCategory, data.categoryName));

  return data;
};

export const getProduct = (productId) => async (dispatch) => {
  const res = await csrfFetch(`/api/products/${productId}`);

  const data = await res.json();

  console.log("produict and shop data", data);

  dispatch(setProduct(data.product, data.shop));
  return data;
};

export const getProductsByShop = (shopId) => async (dispatch) => {
  const res = await csrfFetch(`/api/products/shops/${shopId}`);

  const data = await res.json();

  dispatch(productsByShop(data.productsByShop));

  return data;
};
export const getProductsByShop2 = (shopId) => async (dispatch) => {
  const res = await csrfFetch(`/api/products/shops/${shopId}`);

  const data = await res.json();

  dispatch(productsByShop2(data.productsByShop));

  return data;
};
export const getProductsByShop3 = (shopId) => async (dispatch) => {
  const res = await csrfFetch(`/api/products/shops/${shopId}`);

  const data = await res.json();

  dispatch(productsByShop3(data.productsByShop));

  return data;
};

export const getSearchResults = (search) => async (dispatch) => {
  const res = await csrfFetch(`/api/products/search`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      search,
    }),
  });
  const data = await res.json();
  console.log("this is zee data", data);
  dispatch(searchResults(data.products));

  return data.products;
};

const initialState = {
  category1: [],
  category2: [],
  products: [],
  current_product: {},
  search_results: [],
};

const productsReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case PRODUCTS_CATEGORY: {
      newState = { ...state };
      newState.category1 = action.payload;

      return newState;
    }
    case PRODUCTS_CATEGORY2: {
      newState = { ...state };
      newState.category2 = [...action.payload];
      return newState;
    }
    case ALL_PRODUCTS_CATEGORY: {
      newState = { ...state };
      newState.products = action.payload.products;
      newState.categoryName = action.payload.categoryName;
      return newState;
    }
    case SET_PRODUCT: {
      newState = { ...state };
      newState.current_product = action.payload;
      return newState;
    }
    case PRODUCTS_SHOP: {
      newState = { ...state };
      newState.productsByShop = [...action.payload];
      return newState;
    }
    case PRODUCTS_SHOP2: {
      newState = { ...state };
      newState.productsByShop2 = [...action.payload];
      return newState;
    }
    case PRODUCTS_SHOP3: {
      newState = { ...state };
      newState.productsByShop3 = [...action.payload];
      return newState;
    }
    case SEARCH_RESULTS: {
      newState = { ...state };
      const products = action.payload;
      newState.search_results = products;
      return newState;
    }
    default:
      return state;
  }
};

export default productsReducer;
