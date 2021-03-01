import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/shoppingCart";
import { useParams } from "react-router-dom";
import { useState } from "react";

const ProductDescription = ({ product }) => {
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

  return (
    <div id="description-div">
      <h1>{product[0]?.product.name}</h1>
      <h2>Shop: {product[0]?.shop.name}</h2>
      <div id="h3-description-div">
        <h3>Year: {product[0]?.product.year}</h3>
        <h3>Model: {product[0]?.product.model}</h3>
        <h3>Color: {product[0]?.product.color}</h3>
        <p>
          <h3>About This Product:</h3> {product[0]?.product.description}
        </p>
        <h3>In Stock? {product[0]?.product.available ? "Yes" : "No"}</h3>
        <h3>Price: ${product[0]?.product.price}</h3>
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
