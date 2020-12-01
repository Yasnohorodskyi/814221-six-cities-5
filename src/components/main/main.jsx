import React from "react";
import PropTypes from "prop-types";
import CitiesList from "../cities-list/cities-list";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {AuthorizationCodes} from "../../const";
import cn from "classnames";
import {getSortedOffers} from "../../store/selectors/get-filter-offers";

const Main = ({authorizationStatus, offersCity}) => {
  offersCity = [];
  return (
    <React.Fragment>
      <div className="page page--gray page--main" >
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <a className="header__logo-link header__logo-link--active">
                  <img
                    className="header__logo"
                    src="img/logo.svg"
                    alt="6 cities logo"
                    width="81"
                    height="41"
                  />
                </a>
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    {authorizationStatus === AuthorizationCodes.AUTH ? (
                      <Link
                        to="/favorites"
                        className="header__nav-link header__nav-link--profile"
                      >
                        <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                        <span className="header__user-name user__name">
                          Oliver.conner@gmail.com
                        </span>
                      </Link>
                    ) : (
                      <Link
                        to="/login"
                        className="header__nav-link header__nav-link--profile"
                        href="#"
                      >
                        <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                        <span className="header__login">Sign in</span>
                      </Link>
                    )}
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>

        <main className={cn(`page page--gray page--main`, {
          "page__main--index-empty": offersCity.length === 0,
        })}>
          <h1 className="visually-hidden">Cities</h1>
          <CitiesList></CitiesList>
        </main>
      </div>
    </React.Fragment>
  );
};

Main.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  offersCity: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.USER.authorizationStatus,
  offersCity: getSortedOffers(state),

});

export {Main};
export default connect(mapStateToProps)(Main);

