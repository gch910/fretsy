import { csrfFetch } from "./csrf";

const GET_SHOPS = "/shops/getShops";

const getShops = (shops) => {
  return {
    type: GET_SHOPS,
    payload: shops,
  };
};

export const getAllShops = () => async (dispatch) => {
  const res = await csrfFetch("/api/shops");

  const data = await res.json();

  dispatch(getShops(data.shops));

  return data;
};

const shopsReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case GET_SHOPS:
      newState = { ...action.payload };
      return newState;
    default:
      return state;
  }
};

export default shopsReducer;
