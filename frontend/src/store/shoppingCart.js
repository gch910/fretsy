import { csrfFetch } from "./csrf";

const CART_ADD = "/carts/cartAdd";

const cartAdd = (cart, cartItems) => {
  return {
    type: CART_ADD,
    payload: {cart, cartItems}
  };
};

export const addToCart = (userId, productId) => async (dispatch) => {
  const res = await csrfFetch(`/api/shopping-cart/${userId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ productId }),
  });
  const data = await res.json();
  console.log("data", data)

  dispatch(cartAdd(data.cart, data.cartItems));
};

const initialState = {};

const cartsReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case CART_ADD:
      newState = {...action.payload}
    //   action.payload.forEach((item) => {
    //     newState[item.id] = item;
    //   });
      return newState;
    default:
      return state;
  }
};

export default cartsReducer;
