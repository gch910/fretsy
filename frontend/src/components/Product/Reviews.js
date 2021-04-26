import { useHistory } from "react-router-dom";
import "./Product.css";

const Reviews = ({ reviews }) => {
  let reviewObj = {};
  console.log(reviews);
  reviews.forEach((review) => {
    let userRating;
    userRating = Number(review.rating);
    let stars;
    if (userRating === 5) stars = "⭐⭐⭐⭐⭐";
    if (userRating === 4) stars = "⭐⭐⭐⭐";
    if (userRating === 3) stars = "⭐⭐⭐";
    if (userRating === 2) stars = "⭐⭐";
    if (userRating === 1) stars = "⭐";
    if (!userRating) stars = "";
    // console.log(userRating)
    // console.log(stars)
    reviewObj[review.userId] = stars;
  });

  return (
    <div id="reviews-container">
      <h1 id="reviews-h1">{reviews?.length ? "User Reviews:" : "This Item Has No Reviews"}</h1>
      <div id="reviews-div">
        {reviews.map((review) => (
          <div id="review-div">
            <h3>User: {review?.User?.username}</h3>
            <div>Rating: {reviewObj[review?.userId]}</div>
            <div id="review-body"><p id="review-text">{review?.body}</p></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
