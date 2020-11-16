import {createSelector} from "reselect";

const getOffers = (state) => state.offersAll;
const getCity = (state) => state.city;
const getSorType = (state) => state.sortType;

const getOffersByCity = createSelector(getOffers, getCity, (offers, city) =>
  offers.filter((offer) => offer.city.name === city)
);

export const getSortedOffers = createSelector(
    getOffersByCity,
    getSorType,
    (offers, sortType) => {
      switch (sortType) {
        case `Price: low to high`:
          return offers.sort((a, b) => a.price - b.price);
        case `Price: high to low`:
          return offers.sort((a, b) => b.price - a.price);
        case `Top rated first`:
          return offers.sort((a, b) => b.rate - a.rate);
        default:
          return offers;
      }
    }
);


