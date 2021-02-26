import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProductsByCategory } from "../../store/products";

const Banner5Categories = ({ randomCategory2 }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  let something = Object.values(products);

  const randomCategory = () => {
    const number = Math.floor(Math.random() * 4);
    return number
  } 
  const random = randomCategory();

  useEffect(() => {
    dispatch(getProductsByCategory(random));
  }, [dispatch]);

  return (
    <div className="banner-5">
      {randomCategory2?.map((product, idx) => (
        <div className="banner5-img-div" id={`banner5-img${idx}`}>
          <Link to={`/products/${product.id}`}>
            <img className="banner5-img" src={product.img}></img>
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

export default Banner5Categories;