import {getOffersChoosenByCity} from "../utils/common";
export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFERS: `GET_OFFERS`,
  RESET_OFFERS: `RESET_OFFERS`,
  CHANGE_SORT_TYPE: `CHANGE_SORT_TYPE`,
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  getOffers: (city, offers) => {
    const currentOffers = getOffersChoosenByCity(city, offers);
    return {
      type: ActionType.GET_OFFERS,
      payload: currentOffers,
    };
  },
  resetOffers: () => ({
    type: ActionType.RESET_OFFERS,
  }),

  changeSortType: (sortType) => ({
    type: ActionType.CHANGE_SORT_TYPE,
    payload: sortType,

  })
};
