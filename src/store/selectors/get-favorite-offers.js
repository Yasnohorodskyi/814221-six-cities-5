import {createSelector} from "reselect";
const getOffers = (state) => state.DATA.favoriteOffers;

export const getFavoriteSortedOffers = createSelector(getOffers, (offers) =>
  offers.reduce((acc, offer) => {
    if (acc[offer.city.name]) {
      return Object.assign({}, acc, {
        [offer.city.name]: acc[offer.city.name].concat([offer]),
      });
    } else {
      return Object.assign({}, acc, {
        [offer.city.name]: [offer],
      });
    }
  }, {})
);
