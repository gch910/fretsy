import { csrfFetch } from "./csrf";

const SET_CATEGORIES = "/categories/setCategories";
const RANDOM_CATEGORIES1 = "categories/randomCategories1"
const RANDOM_CATEGORIES2 = "categories/randomCategories2"

const setCategories = (categories) => {
  return {
    type: SET_CATEGORIES,
    payload: categories,
  };
};
const randomCategories1 = (categories) => {
  return {
    type: RANDOM_CATEGORIES1,
    payload: categories,
  };
};
const randomCategories2 = (categories) => {
  return {
    type: RANDOM_CATEGORIES2,
    payload: categories,
  };
};

//  const randomCategory = () => {
//    return {
//      type: RANDOM_CATEGORY,
     
//    }
//  }

export const categories = () => async (dispatch) => {
    const res = await csrfFetch(`/api/categories`);

    const data = await res.json();
    console.log("data:", data);
    dispatch(setCategories(data.categories));
    return res;
}
export const getRandomCategories = () => async (dispatch) => {
    const res = await csrfFetch(`/api/categories/random-categories`);

    const data = await res.json();
    // console.log("data:", data);

    dispatch(randomCategories1(data.categoryValues1));
    dispatch(randomCategories2(data.categoryValues2));

    return res;
}



const initialState = {
  allCategories: [],
  randomCat1: [],
  randomCat2: []
};

const categoriesReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_CATEGORIES: {
      newState = {...state};
      
      newState.allCategories = action.payload
    // newState = Object.assign({}, state);
    // newState.categories = action.payload;
      
      return newState;
    }
    case RANDOM_CATEGORIES1: {
      newState = {...state};
      
      newState.randomCat1 = action.payload
    // newState = Object.assign({}, state);
    // newState.categories = action.payload;
      
      return newState;
    }
    case RANDOM_CATEGORIES2: {
      newState = {...state};
      
      newState.randomCat2 = action.payload
    // newState = Object.assign({}, state);
    // newState.categories = action.payload;
      
      return newState;
    }
    default:
      return state;
  }
};

export default categoriesReducer;
