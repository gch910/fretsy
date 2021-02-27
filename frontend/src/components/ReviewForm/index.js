import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useParams, useHistory } from "react-router-dom";
import { getProduct } from "../../store/products";
import { addUserReview } from "../../store/reviews";
import "./ReviewForm.css";

const ReviewForm = ({ sessionUser }) => {
  const { userId, productId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const product = useSelector((state) => state.products);


  const [review, setReview] = useState("");
  const [rating, setRating] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);

    const userReview = {
      review,
      rating,
    };

    console.log(review, rating)

    dispatch(addUserReview(userId, productId, userReview))
    // .catch(
    //   async (res) => {
    //     const data = await res.json();
    //     if (data && data.errors) setErrors(data.errors);
    //   }
    // );
    history.push("/review-success");
  };

  // const purchasedArray = Object.values(purchasedProducts);

  useEffect(() => {
    dispatch(getProduct(productId));
  }, [dispatch]);

  if (!sessionUser) return <Redirect to="/" />;
  
  return (
    <div id="review-form-div">
      <h1 id="review-h1">
        Tell Us What You Though About Your {product[0]?.product.name}
      </h1>
      <img id="review-image" src={`${product[0]?.product.img}`} />
      <form id="review-form" onSubmit={handleSubmit}>
        <ul className="form-errors">
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
        <textarea
          value={review}
          onChange={(e) => setReview(e.target.value)}
          id="review-text"
          placeholder="Write your review!"
        ></textarea>
        <div id="rating-div">
          <input
            type="radio"
            name="rate"
            id="star5"
            value="5"
            onChange={(e) => setRating(e.target.value)}
            checked={rating === "5"}
          ></input>
          <label for="star5" title="text" star>
            5 star
          </label>
          <input
            type="radio"
            name="rate"
            id="star4"
            value="4"
            onChange={(e) => setRating(e.target.value)}
            checked={rating === "4"}
          ></input>
          <label for="star4" title="text" star>
            4 star
          </label>
          <input
            type="radio"
            name="rate"
            id="star3"
            value="3"
            onChange={(e) => setRating(e.target.value)}
            checked={rating === "3"}
          ></input>
          <label for="star3" title="text" star>
            3 star
          </label>
          <input
            type="radio"
            name="rate"
            id="star2"
            value="2"
            onChange={(e) => setRating(e.target.value)}
            checked={rating === "2"}
          ></input>
          <label for="star2" title="text" star>
            2 star
          </label>
          <input
            type="radio"
            name="rate"
            id="star1"
            value="1"
            onChange={(e) => setRating(e.target.value)}
            checked={rating === "1"}
          ></input>
          <label for="star1" title="text" star>
            1 star
          </label>
        </div>
        <button id="review-submit-button" type="submit">
          Submit Your Review
        </button>
      </form>
    </div>
  );
};

export default ReviewForm;
