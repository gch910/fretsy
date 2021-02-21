import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
// import './Navigation.css';

const Navigation = ({ isLoaded, navId }) => {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;

  if (sessionUser) {
    sessionLinks = (
      <>
        <ProfileButton user={sessionUser} />
        <input id="searchbar" type="text" placeholder="Search.."/>
        <NavLink className="nav-link" id="home-link" exact to="/">
          Home
        </NavLink>
      </>
    )
  } else {
    sessionLinks = (
      <>
        <NavLink className="nav-link" id="home-link" exact to="/">
          Home
        </NavLink>
        <input id="searchbar" type="text" placeholder="Search.."/>
        <NavLink className="nav-link" id="login-button" to="/login">
          Log In
        </NavLink>
        <NavLink className="nav-link" id="signup-button" to="/signup">
          Sign Up
        </NavLink>
      </>
    )
  }

  return <nav id={navId}>{isLoaded && sessionLinks}</nav>;
};

export default Navigation;
