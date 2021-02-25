import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getProduct } from "../../store/products";
import { getProductShop } from "../../store/products";
import  ProductImage  from "./ProductImage";
import ProductDescription from "./ProductDescription";
import "./Product.css";


const Product = () => {
  const { productId } = useParams();

  const dispatch = useDispatch();
  const product = useSelector((state) => state.products);
  const shop = useSelector((state) => state.products)
 

   
  

  useEffect(() => {
    dispatch(getProduct(productId));
    
  }, [dispatch]);

  return (
    <div id="product-grid">
      <ProductImage product={product}/>
      <ProductDescription product={product}/>
    </div>
  );
};

export default Product;
