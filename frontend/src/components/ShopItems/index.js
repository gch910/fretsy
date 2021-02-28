import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getProductsByShop } from "../../store/products";
import "./ShopItems.css";

const ShopItems = () => {
  const { shopId } = useParams();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  
  console.log(products.productsByShop)

  const productsArray = Object.values(products);

  useEffect(() => {
    dispatch(getProductsByShop(shopId));
  }, [dispatch]);

  return (
    <div>
      <div id="shop-h1-div">
        <h1>{productsArray[0]?.Shop?.name}</h1>
      </div>
      <div id="shop-grid">
        {products?.productsByShop?.map((product) => (
          <div>
            <h1>{product?.name}</h1>
            <img id="shop-image" src={product?.img} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopItems;
