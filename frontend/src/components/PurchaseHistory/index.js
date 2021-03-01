import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPurchasedItems } from "../../store/purchases";
import { useParams, Link, Redirect } from "react-router-dom";
import "./PurchaseHistory.css";

const PurchaseHistory = ({ sessionUser }) => {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const purchasedProducts = useSelector((state) => state.purchases);

  const purchasedArray = Object.values(purchasedProducts);

  useEffect(() => {
    dispatch(getPurchasedItems(userId));
  }, [dispatch]);

  if (!sessionUser) return <Redirect to="/" />;

  return (
    <div id="purchase-history-container">
      <div id="purchase-history-h1-div">
        <h1 id="purchase-history-h1">{purchasedArray.length ? "Purchase History" : "You Have No Purchased Items"}</h1>
      </div>
      <div id="purchase-history-div">
        {purchasedArray.map((product) => (
          <div id="purchased-item-div">
            <Link to={`/products/${product.id}`}>
              <h1>{product.name}</h1>
            </Link>
            <h3>You Paid: ${product.price}</h3>
            <Link to={`/products/${product.id}`}>
              <img className="purchased-image" src={product.img}></img>
            </Link>
            <div>
              <Link to={`/review/${userId}/${product.id}`}>
                <h1 id="write-review-h1">Write a Review!</h1>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PurchaseHistory;
