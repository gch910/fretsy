import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { unloadProductsByCategory2} from "../../store/products";
import { useEffect, useState } from "react";


const Banner5Categories = ({ randomCategory2}) => {
  const dispatch = useDispatch();

  // const randomCategory = () => {
  //   const number = Math.floor(Math.random() * 4);
  //   return number
  // } 
  // const random = randomCategory();

  useEffect(() => {
    return () => {
      dispatch(unloadProductsByCategory2());
     
    };
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