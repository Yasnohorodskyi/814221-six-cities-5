import React from "react";
import Facilities from "../facitilies/facilities";
import PropTypes from "prop-types";
import SendCommentForm from "../send-comment-form/send-comment-form";
import withSendCommentForm from "../../hocs/with-sent-comment-form/with-sent-comment-form ";
import ReviewsList from "../reviews-list/reviews-list";
import Map from "../map/map";
import offers from "../../mocks/offers";
import withOffersList from "../../hocs/with-offers-list/with-offers-list";
import Offers from "../offers-list/offers-list";
const OffersList = withOffersList(Offers);


const SendCommForm = withSendCommentForm(SendCommentForm);
const Room = (props) => {
  const {offer} = props;
  const {
    img,
    premium,
    price,
    title,
    info,
    type,
    rate,
    bedrooms,
    guests,
    facilities,
    owner,
    comments,
  } = offer;

  return (
    <React.Fragment>
      <div className="page">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <a className="header__logo-link" href="main.html">
                  <img
                    className="header__logo"
                    src="/img/logo.svg"
                    alt="6 cities logo"
                    width="81"
                    height="41"
                  />
                </a>
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <a
                      className="header__nav-link header__nav-link--profile"
                      href="#"
                    >
                      <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                      <span className="header__user-name user__name">
                        Oliver.conner@gmail.com
                      </span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>

        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">
                <div className="property__image-wrapper">
                  <img
                    className="property__image"
                    src="/img/room.jpg"
                    alt="Photo studio"
                  />
                </div>
                <div className="property__image-wrapper">
                  <img
                    className="property__image"
                    src="/img/apartment-01.jpg"
                    alt="Photo studio"
                  />
                </div>
                <div className="property__image-wrapper">
                  <img
                    className="property__image"
                    src={img}
                    alt="Photo studio"
                  />
                </div>
                <div className="property__image-wrapper">
                  <img
                    className="property__image"
                    src="/img/apartment-03.jpg"
                    alt="Photo studio"
                  />
                </div>
                <div className="property__image-wrapper">
                  <img
                    className="property__image"
                    src="/img/studio-01.jpg"
                    alt="Photo studio"
                  />
                </div>
                <div className="property__image-wrapper">
                  <img
                    className="property__image"
                    src="/img/apartment-01.jpg"
                    alt="Photo studio"
                  />
                </div>
              </div>
            </div>
            <div className="property__container container">
              <div className="property__wrapper">
                {premium && (
                  <div className="property__mark">
                    <span>Premium</span>
                  </div>
                )}
                <div className="property__name-wrapper">
                  <h1 className="property__name">{title}</h1>
                  <button
                    className="property__bookmark-button button"
                    type="button"
                  >
                    <svg
                      className="property__bookmark-icon"
                      width="31"
                      height="33"
                    >
                      <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={{width: `80%`}}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">
                    {rate}
                  </span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    {type}
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    {bedrooms}
                  </li>
                  <li className="property__feature property__feature--adults">
                    {guests}
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">&euro;{price}</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">What&apos;s inside</h2>
                  <Facilities facilities={facilities} />
                </div>
                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                      <img
                        className="property__avatar user__avatar"
                        src={owner.photo}
                        width="74"
                        height="74"
                        alt="Host avatar"
                      />
                    </div>
                    <span className="property__user-name">{owner.name}</span>
                  </div>
                  <div className="property__description">
                    <p className="property__text">{info}</p>
                  </div>
                </div>
                <section className="property__reviews reviews">
                  <h2 className="reviews__title">
                    Reviews &middot;{` `}
                    <span className="reviews__amount">{comments.length}</span>
                  </h2>
                  <ReviewsList reviews={comments}></ReviewsList>
                  <SendCommForm></SendCommForm>
                </section>
              </div>
            </div>
            <section className="property__map map">
              <Map offers={offers.slice(0, 3)}></Map>
            </section>
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">
                Other places in the neighbourhood
              </h2>
              <div className="near-places__list places__list">
                <OffersList
                  offers={offers}
                  styleCardClass="near-places__card"
                  styleImgClass="near-places__image-wrapper"
                  numberOfOffers = {3}
                ></OffersList>
              </div>
            </section>
          </div>
        </main>
      </div>
    </React.Fragment>
  );
};
Room.propTypes = {
  offer: PropTypes.shape({
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    premium: PropTypes.bool.isRequired,
    rate: PropTypes.number.isRequired,
    facilities: PropTypes.array.isRequired,
    info: PropTypes.string.isRequired,
    guests: PropTypes.string.isRequired,
    comments: PropTypes.array.isRequired,
    bedrooms: PropTypes.string.isRequired,
    owner: PropTypes.shape({
      photo: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      super: PropTypes.bool.isRequired,
    }),
  }).isRequired,
};
export default Room;
