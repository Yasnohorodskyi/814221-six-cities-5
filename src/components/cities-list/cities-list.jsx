import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import OfferList from "../offer-list/offer-list";
import Map from "../map/map";
import cn from "classnames";

class CitiesList extends PureComponent {
  constructor(props) {
    super(props);
    this._onCLick = this._onCLick.bind(this);
  }

  _onCLick(evt) {
    const {changeCity, getOffers, offersAll} = this.props;
    const currentCity = evt.target.textContent.toString();
    changeCity(currentCity);
    getOffers(currentCity, offersAll);
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
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex="0">
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li
                    className="places__option places__option--active"
                    tabIndex="0"
                  >
                    Popular
                  </li>
                  <li className="places__option" tabIndex="0">
                    Price: low to high
                  </li>
                  <li className="places__option" tabIndex="0">
                    Price: high to low
                  </li>
                  <li className="places__option" tabIndex="0">
                    Top rated first
                  </li>
                </ul>
              </form>
              <OfferList
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
  getOffers: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  offersCity: state.offersCity,
  offersAll: state.offersAll,
  city: state.city,
});

const mapDispatchToProps = (dispatch) => ({
  changeCity(city) {
    dispatch(ActionCreator.changeCity(city));
  },
  getOffers(city, offers) {
    dispatch(ActionCreator.getOffers(city, offers));
  },
  resetOffers() {
    dispatch(ActionCreator.resetOffers());
  },
});

export {CitiesList};
export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
