import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import { getCartItems, deleteCartItem, deleteUserCart, addPurchaseHistory } from "../../store/shoppingCart";
import "./CheckoutPage.css";


const CheckoutPage = () => {
  const { userId } = useParams();
  const sessionUser = useSelector((state) => state.session.user);
  const sessionCart = useSelector((state) => state.carts.shopping_cart);
  const dispatch = useDispatch();

  const history = useHistory();

  var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  
  });

  // const cartArray = Object.values(sessionCart);

  let totalPrice = 0;

  const deleteItemClick = (e) => {
    // e.preventDefault();
    console.log("inside delete function", e);
    
    dispatch(deleteCartItem(userId, e.target?.id));
    
  };

  const itemIdArray = sessionCart?.map(item => item?.Product?.id);

  const makePurchase = (e) => {
    dispatch(deleteUserCart(userId));
    addPurchaseHistory(userId, itemIdArray)
    history.push("/complete")
  };

  sessionCart?.forEach((item) => {
    const number = parseInt(item.Product?.price);
    totalPrice += number;
  });

  // console.log(parseInt(cartArray[0]?.Product.price) + 1000)
  //   console.log(cartArray[0].Product?.price)
  console.log(totalPrice);

  useEffect(() => {
    dispatch(getCartItems(userId));
  }, [dispatch, sessionCart?.length]);

  return (
    <>
      <div id="checkout-page-grid">
        <h1 id="checkout-h1">Checkout</h1>
        <h1 id="checkout-price-h1">Your Total: {formatter.format(totalPrice) ? formatter.format(totalPrice) : ""}</h1>
        <div id="complete-checkout-div">
          <button className="no-outline" id="complete-checkout" onClick={makePurchase}>Complete Purchase</button>
        </div>

        <Link id="checkout-link" to={`/shopping-cart/${userId}`}>
          <button className="no-outline" id="back-to-cart">Back To Cart</button>
        </Link>
      </div>
      <div id="cart-h1-div">
        <h1 id="cart-h1">
          {sessionCart?.length
            ? "Your shopping cart"
            : "You have no items in your cart"}
        </h1>
      </div>
      <div id="check-out-grid">
        {sessionCart?.map((item, idx) => (
          <div key={idx} className="cart-item" id={`cart-item-${item?.idx}`}>
            <div className="cart-item-name">
              <h3>{item?.Product?.name}</h3>
            </div>
            <div className="cart-item-image-div">
              <img className="cart-item-image" src={item?.Product?.img}></img>
            </div>
            <div className="cart-item-price">
              <h1>{formatter.format(item?.Product?.price)}</h1>
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
      </div>
    </>
  );
};

export default CheckoutPage;
