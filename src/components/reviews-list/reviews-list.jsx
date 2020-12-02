import React from "react";
import PropTypes from "prop-types";
import Review from "../review/review";
import {NUMBER_OF_COMMENTS} from "../../const";

const ReviewsList = ({reviews}) => {
  const reviewsItems = reviews.slice().sort((a, b)=>Date.parse(b.date) - Date.parse(a.date));
  const croppedReviewsItems = reviewsItems.length > NUMBER_OF_COMMENTS ? reviewsItems.slice(0, NUMBER_OF_COMMENTS) : reviewsItems;
  const reviewsComponents = croppedReviewsItems.map((reviewItem, index) => {
    return <Review review={reviewItem} key={index}></Review>;
  });

  return <ul className="reviews__list">{reviewsComponents}</ul>;
};

ReviewsList.propTypes = {
  reviews: PropTypes.array.isRequired,
};

export default ReviewsList;
