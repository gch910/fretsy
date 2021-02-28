import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ProfileButton from "./ProfileButton";
import SubNav from "./SubNav";
import SignupFormModal from '../SignupFormModal'; //modal
import { categories } from "../../store/categories";
import './Navigation.css';

const Navigation = ({ isLoaded, navId }) => {
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const allCategories = useSelector((state) => state.categories);

  const categoryArray = Object.values(allCategories);


  console.log("all categories", categoryArray);

  useEffect(() => {
    dispatch(categories())
  }, [dispatch])

  let sessionLinks;

  if (sessionUser) {
    sessionLinks = (
      <>
        <ProfileButton user={sessionUser} />
        <input
          id="searchbar"
          className="no-outline"
          type="text"
          placeholder="Search..."
        />
        <NavLink className="nav-link" id="home-link" exact to="/">
          Home
        </NavLink>
        <NavLink to={`/shopping-cart/${sessionUser.id}`} id="cart-button">
          <i class="fas fa-shopping-cart fa-3x"></i>
        </NavLink>
      </>
    );
   
  } else {
    sessionLinks = (
      <>
        <NavLink className="nav-link" id="home-link" exact to="/">
          Home
        </NavLink>
        <input
          id="searchbar"
          className="no-outline"
          type="text"
          placeholder="Search..."
        />
        {/* <NavLink className="nav-link" id="login-button" to="/login">
          Log In
        </NavLink> */}
        {/* <NavLink className="nav-link" id="signup-button" to="/signup">
          Sign Up
        </NavLink> */}
        <SignupFormModal />
        {/* <NavLink to="/signup">Sign Up</NavLink> */}
      </>
    );
  }

  return (
    <div id="nav-container">
      <nav id={navId}>{isLoaded && sessionLinks}</nav>
      {/* <div id="sub-nav-container">
        <nav id="sub-nav">{subLinks}</nav>
      </div> */}
      <SubNav categories={categoryArray}/>
    </div>
  );
};

export default Navigation;
