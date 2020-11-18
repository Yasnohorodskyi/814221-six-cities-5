import {createSelector} from "reselect";

const getOffers = (state) => state.offersAll;
const getCity = (state) => state.city;
const getSorType = (state) => state.sortType;
const sortTypesNames = {
  PRICE_LOW_TO_HIGH: `Price: low to high`,
  PRICE_HIGH_TO_LOW: `Price: high to low`,
  TOP_RATED_FIRST: `Top rated first`,
};

const getOffersByCity = createSelector(getOffers, getCity, (offers, city) =>
  offers.filter((offer) => offer.city.name === city)
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
          return [...offers].sort((a, b) => b.rate - a.rate);
        default:
          return [...offers];
      }
    }
);
