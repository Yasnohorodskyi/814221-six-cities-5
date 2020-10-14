import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const CardOffer = (props) => {
  const {
    offer,
    onHover,
    styleCardClass,
    styleImgClass,
    styleInfoClass,
  } = props;
  const {price, img, title, type, premium, id} = offer;
  return (
    <article
      className={styleCardClass + ` ` + `place-card`}
      dataid={id}
      onMouseOver={onHover}
    >
      {premium === true && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={styleImgClass + ` ` + `place-card__image-wrapper`}>
        <Link to={`/offer/` + id}>
          <img
            className="place-card__image"
            src={img}
            width="260"
            height="200"
            alt="Place image"
          />
        </Link>
      </div>
      <div
        className={
          styleInfoClass
            ? styleInfoClass + ` ` + `place-card__info`
            : `place-card__info`
        }
      >
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `80%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/` + id}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

CardOffer.propTypes = {
  onHover: PropTypes.func.isRequired,
  offer: PropTypes.shape({
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    premium: PropTypes.bool.isRequired,
  }).isRequired,
  styleCardClass: PropTypes.string.isRequired,
  styleImgClass: PropTypes.string.isRequired,
  styleInfoClass: PropTypes.string.isRequired,
};

export default CardOffer;
