import React from "react";
import PropTypes from "prop-types";
import Review from "../review/review";

const ReviewsList = ({reviews}) => {
  const reviewsItems = reviews.map((reviewItem, index) => {
    return <Review review={reviewItem} key={index}></Review>;
  });

  return <ul className="reviews__list">{reviewsItems}</ul>;
};

ReviewsList.propTypes = {
  reviews: PropTypes.array.isRequired,
};

export default ReviewsList;
