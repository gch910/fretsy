import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import SignupFormModal from '../SignupFormModal'; //modal
import './Navigation.css';

const Navigation = ({ isLoaded, navId }) => {
  const sessionUser = useSelector((state) => state.session.user);


  let sessionLinks;
  let subLinks = (
    <>
      <NavLink className="sub-link" id="sublink-1" to="/test">
        Something
      </NavLink>
      <NavLink className="sub-link" id="sublink-2" to="/test">
        Something
      </NavLink>
      <NavLink className="sub-link" id="sublink-3" to="/test">
        Something
      </NavLink>
      <NavLink className="sub-link" id="sublink-4" to="/test">
        Something
      </NavLink>
      <NavLink className="sub-link" id="sublink-5" to="/test">
        Something
      </NavLink>
      <NavLink className="sub-link" id="sublink-6" to="/test">
        Something
      </NavLink>
    </>
  );

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
        <NavLink to="/shopping-cart" id="cart-button">
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
      <div id="sub-nav-container">
        <nav id="sub-nav">{subLinks}</nav>
      </div>
    </div>
  );
};

export default Navigation;
