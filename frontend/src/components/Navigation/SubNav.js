import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Navigation.css";

const SubNav = ({ categories }) => {
  const sixCategories = categories.slice(0, 6);
 
  return (
    <div id="sub-nav-container">
      <nav id="sub-nav">
        {sixCategories.map((category, idx) => (
          <NavLink className="sub-link" id={`sublink-${idx + 1}`} to={`/categories/${category.id}`}>
              {category.name}
          </NavLink>
        ))}
        <NavLink to="/shops" className="sub-link" id="sublink-7">Shops</NavLink>
      </nav>
    </div>
  );
};

export default SubNav;
