import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import { getCartItems, deleteCartItem, deleteUserCart } from "../../store/shoppingCart";


const CheckoutPage = () => {
  const { userId } = useParams();
  const sessionUser = useSelector((state) => state.session.user);
  const sessionCart = useSelector((state) => state.carts);
  const dispatch = useDispatch();

  const history = useHistory();

  var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  
    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

  const cartArray = Object.values(sessionCart);

  let totalPrice = 0;

  const deleteItemClick = (e) => {
    // e.preventDefault();
    console.log("inside delete function", e);
    
    dispatch(deleteCartItem(userId, e.target?.id));
    
  };


  const makePurchase = (e) => {
    dispatch(deleteUserCart(userId));
    history.push("/")
  };

  cartArray?.forEach((item) => {
    const number = parseInt(item.Product?.price);
    totalPrice += number;
  });

  // console.log(parseInt(cartArray[0]?.Product.price) + 1000)
  //   console.log(cartArray[0].Product?.price)
  console.log(totalPrice);

  useEffect(() => {
    dispatch(getCartItems(userId));
  }, [dispatch, cartArray?.length]);

  return (
    <>
      <div id="checkout-page-grid">
        <h1>Checkout</h1>
        <h1>Your Total: {formatter.format(totalPrice)}</h1>
        <div>
          <button onClick={makePurchase}>Complete Purchase</button>
        </div>

        <Link to={`/shopping-cart/${userId}`}>
          <button>Back To Cart</button>
        </Link>
      </div>
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
      </div>
    </>
  );
};

export default CheckoutPage;
