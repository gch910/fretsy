import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
// import './Navigation.css';

const Navigation = ({ isLoaded }) => {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;

  if (sessionUser) {
    sessionLinks = (
      <>
        <ProfileButton user={sessionUser} />;
        <NavLink className="nav-link" exact to="/">
          Home
        </NavLink>
        <NavLink className="nav-link" exact to="/test">
          Other
        </NavLink>
      </>
    );
  } else {
    sessionLinks = (
      <>
        <NavLink className="nav-link" to="/login">
          Log In
        </NavLink>
        <NavLink className="nav-link" to="/signup">
          Sign Up
        </NavLink>
      </>
    );
  }

  return <nav className="nav-ul">{isLoaded && sessionLinks}</nav>;
};

export default Navigation;
