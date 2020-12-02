import React from "react";
import PropTypes from "prop-types";

const SendCommentForm = ({
  handleSubmit,
  handleFieldChange,
  isSending,
  formComment,
  formRating,
}) => {
  const Rating = [
    {value: 5, title: `perfect`},
    {value: 4, title: `good`},
    {value: 3, title: `not bad`},
    {value: 2, title: `badly`},
    {value: 1, title: `terribly`},
  ];

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={handleSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {Rating.map((rate, index) => (
          <React.Fragment key={index} >
            <input
              onChange={handleFieldChange}
              className="form__rating-input visually-hidden"
              name="rating"
              value={rate.value}
              id={`${rate.value}-stars`}
              type="radio"
              checked={formRating === rate.value}
            />
            <label
              htmlFor={`${rate.value}-stars`}
              className="reviews__rating-label form__rating-label"
              title={rate.title}
            >
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </React.Fragment>
        ))}
      </div>
      <textarea
        onChange={handleFieldChange}
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={formComment}
      ></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set
          <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={
            isSending ||
            formComment.length < 50 ||
            formComment.length > 400 ||
            formRating === 0
          }
        >
          Submit
        </button>
      </div>
    </form>
  );
};

SendCommentForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleFieldChange: PropTypes.func.isRequired,
  isSending: PropTypes.bool.isRequired,
  formComment: PropTypes.string.isRequired,
  formRating: PropTypes.string.isRequired,
};

export default SendCommentForm;
