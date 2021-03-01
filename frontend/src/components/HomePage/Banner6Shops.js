import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getProductsByShop } from "../../store/products";
import Banner3Categories from "./Banner3Categories";
// import "./ShopItems.css";

const Banner6Shops = ({ products }) => {
  const productsArray = products?.productsByShop;
  const productsArray2 = products?.productsByShop2;
  const productsArray3 = products?.productsByShop3;

  // let index;
  // if (productsArray) {
  //   const random1 = Math.floor(Math.random() * productsArray.length);
  //   index = productsArray[random1];
  // }

  // let index2;
  // if (productsArray2) {
  //   const random2 = Math.floor(Math.random() * productsArray2.length);
  //   index2 = productsArray[random2];
  // }
  // let index3;
  // if (productsArray3) {
  //   const random3 = Math.floor(Math.random() * productsArray3.length);
  //   index3 = productsArray[random3];
  // }

  // console.log("array", productsArray);
  return (
    <div className="banner-6">
      <div id="banner6-h1-div">
        <h1 id="banner6-h1">Explore Our Shops:</h1>
      </div>
      <div id="banner-shop-1">
        {productsArray?.map((product, idx) => (
          <div id="banner6-item-div">
            <div id="banner-name-1">
              <Link id="b6-shop-link" to={`/shop-items/${product?.Shop?.id}`}>
                <h1 className="banner-name">{product?.Shop?.name}</h1>
              </Link>
            </div>
            <div>
              <div>
                <Link to={`/products/${product?.id}`}>
                  <img id="banner6-image" src={product?.img} />
                </Link>
                <Link id="b6-product-link" to={`/products/${product?.id}`}>
                  <h3>{product?.name}</h3>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div id="banner-shop-2">
        {productsArray2?.map((product) => (
          <div id="banner6-item-div">
            <Link id="b6-shop-link" to={`/shop-items/${product?.Shop?.id}`}>
              <h1 className="banner-name">{productsArray2[0]?.Shop?.name}</h1>
            </Link>
            <div>
              <Link to={`/products/${product?.id}`}>
                <img id="banner6-image" src={product?.img} />
              </Link>
              <Link id="b6-product-link" to={`/products/${product?.id}`}>
                <h3>{product?.name}</h3>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div id="banner-shop-3">
        {productsArray3?.map((product) => (
          <div id="banner6-item-div">
            <Link id="b6-shop-link" to={`/shop-items/${product?.Shop?.id}`}>
              <h1 className="banner-name">{productsArray3[0]?.Shop?.name}</h1>
            </Link>
            <div>
              <Link to={`/products/${product?.id}`}>
                <img id="banner6-image" src={product?.img} />
              </Link>
              <Link id="b6-product-link" to={`/products/${product?.id}`}>
                <h3>{product?.name}</h3>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner6Shops;
