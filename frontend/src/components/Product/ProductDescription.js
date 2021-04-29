import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/shoppingCart";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ProductDescription = ({ product, isLoaded }) => {
  const { productId } = useParams();
  const sessionUser = useSelector((state) => state.session.user);
  const sessionCart = useSelector((state) => state.carts);
  const dispatch = useDispatch();
  const [clicked, setClicked] = useState(false);

  // console.log("cart", sessionCart)

  let userId;

  if (sessionUser) userId = sessionUser.id;

  const updateCart = () => {
    dispatch(addToCart(userId, productId));
    setClicked(true);
    // console.log(sessionCart)
  };

  // useEffect(() => {
  //   setIsLoaded(true);
  // }, [dispatch]);

  return (
    <div id="description-div">
      <h1>{product?.product?.name}</h1>
      <h2>Shop: {product?.shop?.name}</h2>
      <div id="h3-description-div">
        <h3>Year: {product?.product?.year}</h3>
        <h3>Model: {product?.product?.model}</h3>
        <h3>Color: {product?.product?.color}</h3>
        <p id="product-description-div">
          <h3>About This Product:</h3> {product?.product?.description}
        </p>
        <h3>In Stock? {product?.product?.available ? "Yes" : "No"}</h3>
        <h3>Price: ${product?.product?.price}</h3>
      </div>
      {sessionUser ? (
        <button id="product-add-button" disabled={clicked} onClick={updateCart}>
          {!clicked ? "Add To Cart" : "Added!"}
        </button>
      ) : (
        "Sign in to add this to you cart"
      )}
    </div>
  );
};

export default ProductDescription;
