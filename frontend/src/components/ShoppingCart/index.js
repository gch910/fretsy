import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getCartItems, deleteCartItem } from "../../store/shoppingCart";
import "./ShoppingCart.css";

const ShoppingCart = () => {
  const { userId } = useParams();
  const sessionUser = useSelector((state) => state.session.user);
  const sessionCart = useSelector((state) => state.carts);
  const dispatch = useDispatch();

 

  const cartArray = Object.values(sessionCart);

  // console.log("session cart", cartArray[0]?.Product);

  const deleteItemClick = (e) => {
    // e.preventDefault();
    console.log("inside delete function", e);
    
    dispatch(deleteCartItem(userId, e.target?.id));
    
  };

  useEffect(() => {
    dispatch(getCartItems(userId));
    
  }, [dispatch, cartArray?.length]);
 
  return (
    <>
      <div id="cart-h1-div">
        <h1 id="cart-h1">
          {cartArray.length
            ? "Here is your shopping cart"
            : "You have no items in your cart"}
        </h1>
      </div>
      <div id="shopping-cart-grid">
        {cartArray?.map((item, idx) => (
          <div className="cart-item" id={`cart-item-${item?.idx}`}>
            <div className="cart-item-name">
              <h1>{item?.Product?.name}</h1>
            </div>
            <div className="cart-item-image-div">
              <img className="cart-item-image" src={item?.Product?.img}></img>
            </div>
            <div className="cart-item-price">
              <h3>{item?.Product?.price}</h3>
            </div>
            <div className="delete-button-div">
              <button
                onClick={deleteItemClick}
                id={item?.Product?.id}
                className="cart-item-delete"
              >
                Delete Item
              </button>
            </div>
          </div>
        ))}
        <div id="outer-button-div">
          {cartArray.length ? (
            <div id="checkout-button">
              <Link to={`/checkout/${userId}`}>
                <button>Check Out</button>
              </Link>
            </div>
          ) : "" }
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
