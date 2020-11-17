import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import withOffersList from "../../hocs/with-offers-list/with-offers-list";
import Offers from "../offers-list/offers-list";
import Map from "../map/map";
import cn from "classnames";
import SortingMethods from "../sorting-methods/sorting-methods";
import {getSortedOffers} from "../../store/selectors/get-filter-offers";

const OffersList = withOffersList(Offers);
class CitiesList extends PureComponent {
  constructor(props) {
    super(props);
    this._onCLick = this._onCLick.bind(this);
  }

  _onCLick(evt) {
    const {changeCity} = this.props;
    const currentCity = evt.target.textContent.toString();
    changeCity(currentCity);
  }


  render() {
    const {offersCity, city, offersAll} = this.props;
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
              onClick={this._onCLick}
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
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {offersCity.length} places to stay in {city}
              </b>
              <SortingMethods onTabClick = {this._onTabClick}></SortingMethods>
              <OffersList
                offers={offersCity}
                styleCardClass="cities__place-card"
                styleImgClass="cities__image-wrapper"
              />
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map offers={offersCity}></Map>
              </section>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

CitiesList.propTypes = {
  offersNumber: PropTypes.number,
  offersCity: PropTypes.array.isRequired,
  offersAll: PropTypes.array.isRequired,
  city: PropTypes.string.isRequired,
  changeCity: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  offersCity: getSortedOffers(state),
  offersAll: state.offersAll,
  city: state.city,
  sortType: state.sortType,

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
