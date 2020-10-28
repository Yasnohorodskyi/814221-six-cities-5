import { getOffersChoosenByCity } from "../utils/common";
export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFERS: `GET_OFFERS`,
  RESET_OFFERS: `RESET_OFFERS`,
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city ,
  }),
  getOffers: (city, offers) => {
    const currentOffers = getOffersChoosenByCity(city, offers);
    return {
      type: ActionType.GET_OFFERS,
      payload: currentOffers,
    };
  },
  resetOffers: () =>({
    type: ActionType.RESET_OFFERS,
  })
};
