import { csrfFetch } from "./csrf";

const GET_PURCHASES = "/purchases/getPurchases";

const getPurchases = (purchasedItems) => {
    return {
        type: GET_PURCHASES,
        payload: purchasedItems,
    }
}

export const getPurchasedItems = (userId) => async (dispatch) => {
    const res = await csrfFetch(`/api/purchase-history/${userId}`);
    
    const data = await res.json();

    dispatch(getPurchases(data.productsArray))

    return data;
}

const purchasesReducer = (state = {}, action) => {
    let newState;
  switch (action.type) {
    case GET_PURCHASES: {
      newState = {};
      action.payload.forEach(product => {
          newState[product.id] = product
      })
      
      return newState;
    }
    default:
      return state;
  }
}

export default purchasesReducer;