import React, {useState} from "react";
import PropTypes from "prop-types";
import {Link, withRouter} from "react-router-dom";
import cn from "classnames";
import {
  changeFavoriteStatus,
} from "../../store/api-actions";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";

const CardOffer = (props) => {
  const {
    offer,
    onHover,
    styleCardClass,
    styleImgClass,
    styleInfoClass,
    onFavButtonClick,
    changeFavoriteOffers,
    widthImg,
    heightImg,
  } = props;
  const {price, title, type, id, previewImage, isPremium, isFavorite, rating} = offer;

  const [isFav, setFavorite] = useState(isFavorite);
  const handleAddToFavorite = () => {
    onFavButtonClick({
      status: isFav === true ? 0 : 1,
      id,
    });
    setFavorite(!isFav);
    changeFavoriteOffers(offer);
  };
  return (
    <article
      className={styleCardClass + ` ` + `place-card`}
      dataid={id}
      onMouseOver={onHover}
    >
      {isPremium === true && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={styleImgClass + ` ` + `place-card__image-wrapper`}>
        <Link to={`/offer/` + id}>
          <img
            className="place-card__image"
            src={previewImage}
            width={widthImg}
            height={heightImg}
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
          <button
            className={cn(`place-card__bookmark-button button`, {
              "place-card__bookmark-button--active": isFav === true,
            })}
            type="button"
            onClick={handleAddToFavorite}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${(Math.round(rating) / 5) * 100}%`}}></span>
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

const mapDispatchToProps = (dispatch) => ({
  onFavButtonClick(authData) {
    dispatch(changeFavoriteStatus(authData));
  },
  changeFavoriteOffers(offer) {
    dispatch(ActionCreator.changeFavoriteOffers(offer));
  },
});

CardOffer.propTypes = {
  onHover: PropTypes.func.isRequired,
  offer: PropTypes.shape({
    id: PropTypes.number.isRequired,
    previewImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    isPremium: PropTypes.bool.isRequired,
    isFavorite: PropTypes.bool.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
  styleCardClass: PropTypes.string.isRequired,
  styleImgClass: PropTypes.string.isRequired,
  styleInfoClass: PropTypes.string,
  onFavButtonClick: PropTypes.func.isRequired,
  widthImg: PropTypes.string.isRequired,
  heightImg: PropTypes.string.isRequired,
  changeFavoriteOffers: PropTypes.func.isRequired,
};


export {CardOffer};
export default connect(
    null,
    mapDispatchToProps
)(withRouter(CardOffer));
