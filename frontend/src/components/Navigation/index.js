import React, { useEffect, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ProfileButton from "./ProfileButton";
import SubNav from "./SubNav";
import SignupFormModal from "../SignupFormModal"; //modal
import { categories } from "../../store/categories";
import { getSearchResults } from "../../store/products";
import "./Navigation.css";

const Navigation = ({ isLoaded, navId }) => {
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const allCategories = useSelector((state) => state.categories.allCategories);
  const [search, setSearch] = useState("");

  const history = useHistory();

  // const categoryArray = Object.values(allCategories);

  // console.log("all categories", categoryArray);
  const onSearchSubmit = async (e) => {
    e.preventDefault();

    await dispatch(getSearchResults(search)).then((res) => {
      // if (res?.length) {
        setSearch("");
        return history.push("/search-results");
      // } else {
      //   setSearch("");
      //   return history.push("/no-results");
      // }
    });
  };

  useEffect(() => {
    dispatch(categories());
  }, [dispatch]);

  let sessionLinks;

  if (sessionUser) {
    sessionLinks = (
      <>
        <ProfileButton user={sessionUser} />
        <form id="searchbar-form" onSubmit={onSearchSubmit}>
          <input
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            id="searchbar"
            className="no-outline"
            type="text"
            placeholder="Search..."
          />
        </form>
        <NavLink className="nav-link" id="home-link" exact to="/">
          Home
        </NavLink>
        <NavLink to={`/shopping-cart/${sessionUser.id}`} id="cart-button">
          <i id="shopping-cart" class="fas fa-shopping-cart fa-3x"></i>
        </NavLink>
      </>
    );
  } else {
    sessionLinks = (
      <>
        <NavLink className="nav-link" id="home-link" exact to="/">
          Home
        </NavLink>
        <form id="searchbar-form" onSubmit={onSearchSubmit}>
          <input
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            id="searchbar"
            className="no-outline"
            type="text"
            placeholder="Search..."
          />
        </form>
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
      <SubNav categories={allCategories} />
    </div>
  );
};

export default Navigation;
