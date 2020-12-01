import {createSelector} from "reselect";

const getOffers = (state) => state.DATA.offersAll;
const getCity = (state) => state.STATE.city;
const getSorType = (state) => state.STATE.sortType;
const sortTypesNames = {
  PRICE_LOW_TO_HIGH: `Price: low to high`,
  PRICE_HIGH_TO_LOW: `Price: high to low`,
  TOP_RATED_FIRST: `Top rated first`,
};


const getOffersByCity = createSelector(getOffers, getCity, (offers, city) =>

  offers.filter((offer) => offer.cityName === city)
);

export const getSortedOffers = createSelector(
    getOffersByCity,
    getSorType,
    (offers, sortType) => {
      switch (sortType) {
        case sortTypesNames.PRICE_LOW_TO_HIGH:
          return [...offers].sort((a, b) => a.price - b.price);
        case sortTypesNames.PRICE_HIGH_TO_LOW:
          return [...offers].sort((a, b) => b.price - a.price);
        case sortTypesNames.TOP_RATED_FIRST:
          return [...offers].sort((a, b) => b.rating - a.rating);
        default:
          return [...offers];
      }
    }
);
