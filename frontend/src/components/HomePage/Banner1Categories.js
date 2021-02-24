import { Link } from "react-router-dom"; 
// import "./HomePage.css"

//banner1
const Banner1Categories = ({ categoryValues }) => {
  return (
    <div className="banner-1">
      {categoryValues.map((category, idx) => (
        <div className="banner1-img-div" id={`banner1-img${idx}`}>
          <div>
            <Link to={`/categories/${category.id}`}>
              <img className="banner1-img" src={category.img}></img>
            </Link>
          </div>
          <Link
            className="banner-img-text"
            id={`banner-text-${idx}`}
            to={`/categories/${category.id}`}
          >
            <h3>{category.name}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Banner1Categories;
