import {createSelector} from "reselect";
const getOffers = (state) => state.DATA.favoriteOffers;

export const getFavoriteSortedOffers = createSelector(getOffers, (offers) =>
  offers.reduce((acc, offer) => {
    if (acc[offer.cityName]) {
      return Object.assign({}, acc, {
        [offer.cityName]: acc[offer.cityName].concat([offer]),
      });
    } else {
      return Object.assign({}, acc, {
        [offer.cityName]: [offer],
      });
    }
  }, {})
);
