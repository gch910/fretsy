import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getProduct } from "../../store/products";
import { getProductReviews } from "../../store/reviews";
import ProductImage from "./ProductImage";
import ProductDescription from "./ProductDescription";
import Reviews from "./Reviews";
import "./Product.css";

const Product = () => {
  const { productId } = useParams();

  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.current_product);
  const reviews = useSelector((state) => state.reviews);

  const [isLoaded, setIsLoaded] = useState(false);

  const reviewsArray = Object.values(reviews);

  useEffect(() => {
    dispatch(getProduct(productId)).then(() => setIsLoaded(true));
    dispatch(getProductReviews(productId)).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    isLoaded && (
      <div id="product-grid">
        <div id="decoration-div"></div>
        <div id="decoration-div2"></div>
        <ProductImage product={product} />
        <ProductDescription product={product} />
        <Reviews product={product} reviews={reviewsArray} />
      </div>
    )
  );
};

export default Product;
