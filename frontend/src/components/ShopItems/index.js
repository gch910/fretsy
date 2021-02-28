import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getProductsByShop } from "../../store/products";
import "./ShopItems.css";

const ShopItems = () => {
  const { shopId } = useParams();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

 

  const productsArray = Object.values(products);

  console.log(products);

  useEffect(() => {
    dispatch(getProductsByShop(shopId));
  }, [dispatch]);

  return (
    <div>
      <div id="shop-h1-div">
        <h1>{products?.productsByShop[0]?.Shop?.name}</h1>
      </div>
      <div id="shop-grid">
        {products?.productsByShop?.map((product) => (
          <div>
            <div id="shop-image-div">
              <Link to={`/products/${product?.id}`}>
                <img id="shop-image" src={product?.img} />
              </Link>
            </div>
            <Link id="shop-h3" to={`/products/${product?.id}`}>
              <h3>{product?.name}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopItems;
