const Reviews = ({ reviews }) => {
    return (
        <div id="reviews-div">
           {reviews.map(review => (
               <p>{review.body}</p>
           ))}
          
        </div>
        
    )
}

export default Reviews;