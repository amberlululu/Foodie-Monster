import React from "react";
import { Link } from "react-router-dom";
import Review from "./Review";

const Article = ({ id, key, user, title, description, reviews }) => {
  const articleReviews = reviews.map((review) => {
    return (
      <Review
        key={review.id}
        id={review.id}
        rating={review.rating}
        body={review.body}
        user={review.username.username}
      />
    );
  });

  return (
    <div>
      <h3>Author: {user}</h3>
      <h3>Article Name: {title}</h3>
      <h4>Description:</h4>
      <h4>{description}</h4>
      <h3>Reviews</h3>
      {articleReviews}
      <Link to="/">Home</Link>
    </div>
  );
};

export default Article;
