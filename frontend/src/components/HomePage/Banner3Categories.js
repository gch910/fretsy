import { Link } from "react-router-dom";
import { unloadProductsByCategory1 } from "../../store/products";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const Banner3Categories = ({ randomCategory1 }) => {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if(randomCategory1) setIsLoaded(true);
    return () => {
      dispatch(unloadProductsByCategory1());
     
    };
  }, [dispatch]);


  return (
    isLoaded && (
      <div className="banner-3">
        {randomCategory1.map((product, idx) => (
          <div className="banner3-img-div" id={`banner3-img${idx}`}>
            <Link to={`/products/${product.id}`}>
              <img className="banner3-img" src={product.img}></img>
            </Link>
            <Link
              className="banner-img-text"
              id={`banner-text-${idx}`}
              to={`/products/${product?.id}`}
            >
              <h3>{product?.name}</h3>
            </Link>
          </div>
        ))}
      </div>
    )
  );
};

export default Banner3Categories;
