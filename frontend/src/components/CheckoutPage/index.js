import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getCartItems, deleteCartItem } from "../../store/shoppingCart";


const CheckoutPage = () => {
  const { userId } = useParams();
  const sessionUser = useSelector((state) => state.session.user);
  const sessionCart = useSelector((state) => state.carts);
  const dispatch = useDispatch();

  const cartArray = Object.values(sessionCart);

  let totalPrice;

  cartArray?.forEach(item => {
    totalPrice += item?.Product?.price
  })

  console.log(totalPrice)

  useEffect(() => {
    dispatch(getCartItems(userId));
  }, [dispatch, sessionCart]);

  return (
    <div id="checkout-page-grid">
      <h1>Checkout</h1>
      <Link to={`/shopping-cart/${userId}`}>
        <button>Back To Cart</button>
      </Link>
    </div>
  );
};

export default CheckoutPage;
