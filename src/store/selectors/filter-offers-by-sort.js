import {createSelector} from "reselect";

const filterOffers = (state, sortType) => {

  let filteredOffers = state.offersAll;
  const getOffers = () => {
    return state.offersAll;
  };

  const filterOffersByPriceToHigh = createSelector(
      getOffers,
      (offers) => {
        return offers.sort((a, b) => a.price - b.price);
      }
  );

  const filterOffersByPriceToLow = createSelector(
      getOffers,
      (offers) => {
        return offers.sort((a, b)=> b.price - a.price);
      }
  );

  const filterOffersByRateToLow = createSelector(
      getOffers,
      (offers) => {
        return offers.sort((a, b)=> b.rate - a.rate);
      }
  );

  switch (sortType) {
    case `Price: low to high`:
      filteredOffers = filterOffersByPriceToHigh();
      break;
    case `Price: high to low`:
      filteredOffers = filterOffersByPriceToLow();
      break;
    case `Top rated first` :
      filteredOffers = filterOffersByRateToLow();
      break;
    case `default`:
      filteredOffers = state.offersAll;
  }
  return filteredOffers;
};

export default filterOffers;
