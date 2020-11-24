import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import withOffersList from "../../hocs/with-offers-list/with-offers-list";
import Offers from "../offers-list/offers-list";
import Map from "../map/map";
import cn from "classnames";
import SortingMethods from "../sorting-methods/sorting-methods";
import {getSortedOffers} from "../../store/selectors/get-filter-offers";
import MainEmpty from "../main-empty/main-empty";

const OffersList = withOffersList(Offers);
const CitiesList = (props) => {
  const onClick = (evt) => {
    const {changeCity} = props;
    const currentCity = evt.target.textContent.toString();
    changeCity(currentCity);
  };
  const {offersCity, city, offersAll} = props;
  const getCitiesLink = () => {
    const getCitiesNames = () => {
      const citiesNameAr = offersAll.map((offer) => {
        return offer.city.name;
      });
      return new Set(citiesNameAr);
    };
    const names = [...getCitiesNames()];
    return names.map((name, index) => {
      return (
        <li className="locations__item" key={index}>
          <a
            className={cn(`locations__item-link tabs__item`, {
              "tabs__item--active": city === name,
            })}
            href="#"
            onClick={onClick}
          >
            <span>{name}</span>
          </a>
        </li>
      );
    });
  };

  return (
    <React.Fragment>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">{getCitiesLink()}</ul>
        </section>
      </div>
      <div className="cities">
        {offersCity.length !== 0 ? (
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {offersCity.length} places to stay in {city}
              </b>
              <SortingMethods />
              <OffersList
                offers={offersCity}
                styleCardClass="cities__place-card"
                styleImgClass="cities__image-wrapper"
              />
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map offers={offersCity} activeItem={props.activeCard.id}></Map>
              </section>
            </div>
          </div>
        ) : (
          <MainEmpty city={city}></MainEmpty>
        )}
      </div>
    </React.Fragment>
  );
};

CitiesList.propTypes = {
  offersNumber: PropTypes.number,
  offersCity: PropTypes.array.isRequired,
  offersAll: PropTypes.array.isRequired,
  city: PropTypes.string.isRequired,
  changeCity: PropTypes.func.isRequired,
  activeCard: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  offersCity: getSortedOffers(state),
  offersAll: state.DATA.offersAll,
  city: state.STATE.city,
  sortType: state.STATE.sortType,
  activeCard: state.STATE.activeCard,

});

const mapDispatchToProps = (dispatch) => ({
  changeCity(city) {
    dispatch(ActionCreator.changeCity(city));
  },
  resetOffers() {
    dispatch(ActionCreator.resetOffers());
  },
});

export {CitiesList};
export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
