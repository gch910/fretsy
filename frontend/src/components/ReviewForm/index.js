import React, { useState, useEffect } from "react";
import { login } from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useParams } from "react-router-dom";
import { getProduct } from "../../store/products";
import "./ReviewForm.css";

const ReviewForm = () => {
  const { userId, productId } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products);

  const [review, setReview] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);

    const userReview = {
      review
    };

    return dispatch(login(user)).catch(async (res) => {
      const data = await res.json();
      if (data && data.errors) setErrors(data.errors);
    });
  };

  

  // const purchasedArray = Object.values(purchasedProducts);

  useEffect(() => {
    dispatch(getProduct(productId));
  }, [dispatch]);
  return (
    <div id="review-form-div">
      <h1 id="review-h1">Tell Us What You Though About Your {product[0]?.product.name}</h1>
      <img id="review-image" src={`${product[0]?.product.img}`} />
      <form id="review-form">
        <textarea value={review} onChange={(e) => setReview(e.target.value)}
          id="review-text"
          placeholder="Write your review!"
        ></textarea>
        <button id="review-submit-button" type="submit">Submit Your Review</button>
      </form>
    </div>
  );
};

export default ReviewForm;
