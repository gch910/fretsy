import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

const SubNav = ({ categories }) => {
  const sixCategories = categories.slice(0, 6);
 
  return (
    <div id="sub-nav-container">
      <nav id="sub-nav">
        {/* <NavLink className="sub-link" id="sublink-1" to="/test">
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
        </NavLink> */}
        {sixCategories.map((category, idx) => (
          <NavLink className="sub-link" id={`sublink-${idx + 1}`} to={`/categories/${category.id}`}>
              {category.name}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default SubNav;
