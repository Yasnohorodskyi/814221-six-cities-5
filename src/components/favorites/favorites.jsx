import React, {useEffect} from "react";
import Offers from "../offers-list/offers-list";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import withOffersList from "../../hocs/with-offers-list/with-offers-list";
import {fetchFavoriteOffers} from "../../store/api-actions";
import {connect} from "react-redux";
import {getFavoriteSortedOffers} from "../../store/selectors/get-favorite-offers";
import FavoriteEmpty from "../favorite-empty/favorite-empty";
import cn from "classnames";
const OffersList = withOffersList(Offers);

const Favorites = ({favoriteOffers, getFavoriteOffers, sortedOffers}) => {
  useEffect(() => {
    getFavoriteOffers();
  }, []);
  const getFavoriteItems = (offers) => {
    return Object.entries(offers).map((item, index) => {
      return (
        <li className="favorites__locations-items" key={index}>
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>{item[0]}</span>
              </a>
            </div>
          </div>
          <div className="favorites__places">
            <OffersList
              offers={item[1]}
              widthImg="150"
              heightImg="110"
              styleCardClass="favorites__card"
              styleImgClass="favorites__image-wrapper"
              styleInfoClass="favorites__card-info"
            />
          </div>
        </li>
      );
    });
  };
  return (
    <React.Fragment>
      <div className="page">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <Link to="/" className="header__logo-link">
                  <img
                    className="header__logo"
                    src="img/logo.svg"
                    alt="6 cities logo"
                    width="81"
                    height="41"
                  />
                </Link>
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

        <main
          className={cn(`page__main page__main--favorites`, {
            "page__main--favorites-empty": sortedOffers === {},
          })}
        >
          <div className="page__favorites-container container">
            {favoriteOffers.length === 0 ? (
              <FavoriteEmpty />
            ) : (
              <section className="favorites">
                <h1 className="favorites__title">Saved listing</h1>
                <ul className="favorites__list">
                  {getFavoriteItems(sortedOffers)}
                </ul>
              </section>
            )}
          </div>
        </main>
        <footer className="footer container">
          <Link to="/" className="footer__logo-link" href="main.html">
            <img
              className="footer__logo"
              src="img/logo.svg"
              alt="6 cities logo"
              width="64"
              height="33"
            />
          </Link>
        </footer>
      </div>
    </React.Fragment>
  );
};

Favorites.propTypes = {
  sortedOffers: PropTypes.object,
  getFavoriteOffers: PropTypes.func,
  favoriteOffers: PropTypes.array,
};
const mapStateToProps = (state) => ({
  sortedOffers: getFavoriteSortedOffers(state),
  favoriteOffers: state.DATA.favoriteOffers,
});

const mapDispatchToProps = (dispatch) => ({
  getFavoriteOffers() {
    dispatch(fetchFavoriteOffers());
  },
});
export {Favorites};
export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
