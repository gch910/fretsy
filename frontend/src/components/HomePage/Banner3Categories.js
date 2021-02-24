import { Link } from "react-router-dom";

const Banner3Categories = ({ productCategoryValues, allCategories }) => {
  
  return (
    <div className="banner-3">
      {productCategoryValues?.map((product, idx) => (
        <div className="banner3-img-div" id={`banner3-img${idx}`}>
          <Link to={`/products/${product.id}`}>
            <img className="banner3-img" src={product.img}></img>
          </Link>
          <Link
            className="banner-img-text"
            id={`banner-text-${idx}`}
            to={`/products/${product.id}`}
          >
            <h3>{product.name}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Banner3Categories;
