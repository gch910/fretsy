import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import sessionReducer from "./session";
import categoriesReducer from "./categories";
import productsReducer from "./products";
import cartsReducer from './shoppingCart';
import purchasesReducer from './purchases';
import reviewsReducer from './reviews';
import shopsReducer from './shops';

const rootReducer = combineReducers({
    session: sessionReducer,
    categories: categoriesReducer,
    products: productsReducer,
    carts: cartsReducer,
    purchases: purchasesReducer,
    reviews: reviewsReducer,
    shops: shopsReducer,
});

let enhancer;

if(process.env.NODE_ENV === 'production') {
    enhancer = applyMiddleware(thunk);
} else {
    const logger = require('redux-logger').default;
    const composeEnhancers = 
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
    return createStore(rootReducer, preloadedState, enhancer);
}

export default configureStore;
