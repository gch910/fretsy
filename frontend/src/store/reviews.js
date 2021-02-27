import { csrfFetch } from "./csrf";

const ADD_REVIEW = "/reviews/addReview";

const addReview = (review, rating) => {
  return {
    type: ADD_REVIEW,
    payload: { review, rating },
  };
};

export const addUserReview = (userId, productId, userReview) => async (
  dispatch
) => {
  console.log("inside review thunk")
  const { review, rating } = userReview;
  const res = await csrfFetch(`/api/review/${userId}/${productId}`, {
    method: "POST",
    body: JSON.stringify({ review, rating }),
  });
  

  const data = await res.json();

  dispatch(addReview(data.review, data.rating));
};

const reviewsReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case ADD_REVIEW: {
      newState.review = { ...action.payload.review };
      newState.rating = { ...action.payload.rating };

      return newState;
    }
    default:
      return state;
  }
};

export default reviewsReducer;
