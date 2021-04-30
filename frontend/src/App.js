import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
// import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";
import HomePage from "./components/HomePage";
import CategoryItems from "./components/CategoryItems";
import Product from "./components/Product";
import ShoppingCart from "./components/ShoppingCart";
import CheckoutPage from "./components/CheckoutPage";
import CheckoutComplete from "./components/CheckoutComplete";
import PurchaseHistory from "./components/PurchaseHistory";
import ReviewForm from "./components/ReviewForm";
import ReviewSuccess from "./components/ReviewSuccess"
import Shops from "./components/Shops";
import ShopItems from "./components/ShopItems";
import SearchResults from "./components/Navigation/SearchResults";
import ScrollToTop from "./components/ScrollToTop";

import * as sessionActions from "./store/session";

const App = () => {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  
  }, [dispatch]);

  const sessionUser = useSelector((state) => state.session.user);

  let navId;

  if (sessionUser) {
    navId = "logged-in-nav";
  } else {
    navId = "logged-out-nav";
  }

  return (
    <>
      <Navigation navId={navId} isLoaded={isLoaded} sessionUser={sessionUser} />
      {isLoaded && (
        <>
          {/* <div id="app-grid"> */}
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route path="/login">
                <LoginFormPage />
              </Route>
              {/* <Route path="/signup">
              <SignupFormPage />
            </Route> */}
              <Route path="/categories/:categoryId">
                <CategoryItems />
              </Route>
              <Route path="/products/:productId">
                <Product />
              </Route>
              <Route path="/shopping-cart/:userId">
                <ShoppingCart sessionUser={sessionUser}/>
              </Route>
              <Route path="/checkout/:userId">
                <CheckoutPage sessionUser={sessionUser}/>
              </Route>
              <Route path="/complete">
                <CheckoutComplete sessionUser={sessionUser}/>
              </Route>
              <Route path="/purchase-history/:userId">
                <PurchaseHistory sessionUser={sessionUser}/>
              </Route>
              <Route path="/review/:userId/:productId/">
                <ReviewForm sessionUser={sessionUser}/>
              </Route>
              <Route path="/review-success">
                <ReviewSuccess sessionUser={sessionUser}/>
              </Route>
              <Route path="/shops">
                <Shops sessionUser={sessionUser}/>
              </Route>
              <Route exact path="/shop-items/:shopId">
                <ShopItems sessionUser={sessionUser}/>
              </Route>
              <Route path="/search-results">
                <SearchResults />
              </Route>
            </Switch>
          {/* </div> */}
        </>
      )}
    </>
  );
};

export default App;
