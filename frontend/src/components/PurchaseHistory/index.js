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

  if (!sessionUser) return <Redirect to="/" />

  return (
    <div>
      <h1>Purchase History</h1>
      <div>
        {purchasedArray.map((product) => (
          <div>
            <h1>{product.name}</h1>
            <img className="purchased-image" src={product.img}></img>
            <div>
              <Link to={`/review/${userId}/${product.id}`}>Write a Review!</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PurchaseHistory;
