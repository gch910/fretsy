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
      <Navigation navId={navId} isLoaded={isLoaded} />
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
              <Route path="/categories/:id">
                <CategoryItems />
              </Route>
              <Route path="/products/:productId">
                <Product />
              </Route>
              <Route path="/shopping-cart/:userId">
                <ShoppingCart sessionUser={sessionUser}/>
              </Route>
            </Switch>
          {/* </div> */}
        </>
      )}
    </>
  );
};

export default App;
