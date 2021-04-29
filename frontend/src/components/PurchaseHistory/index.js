import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPurchasedItems } from "../../store/purchases";
import { useParams, Link, Redirect } from "react-router-dom";
import ScrollTopButton from "../ScrollTopButton";
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
        <h1 id="purchase-history-h1">
          {purchasedArray.length
            ? "Purchase History"
            : "You Have No Purchased Items"}
        </h1>
      </div>
      <div id="purchase-history-div">
        {purchasedArray.map((product) => (
          <div id="purchased-outer">
            <div id="purchased-item-div">
              <div id="purchased-link-div">
                <Link className="purchased-link" to={`/products/${product.id}`}>
                  <h1 id="purchased-item-h1">{product.name}</h1>
                </Link>
              </div>
              <h3 className="purchased-price-h3">You Paid: ${product.price}</h3>
              <Link to={`/products/${product.id}`}>
                <img className="purchased-image" src={product.img}></img>
              </Link>
              <div>
                <Link
                  className="purchased-link"
                  to={`/review/${userId}/${product.id}`}
                >
                  <h1 id="write-review-h1">Write a Review!</h1>
                </Link>
              </div>
            </div>
          </div>
        ))}
        {purchasedArray.length > 2 && <div id="color-div"><ScrollTopButton /></div>}
      </div>
    </div>
  );
};

export default PurchaseHistory;
