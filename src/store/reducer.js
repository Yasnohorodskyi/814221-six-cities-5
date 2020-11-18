import {extend} from "../utils/common";
import {ActionType} from "../store/action";
import offers from "../mocks/offers";

const initialState = {
  city: `Paris`,
  offersAll: offers,
  sortType: `Popular`,
  activeCard: offers[0],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        city: action.payload,
      });

    case ActionType.GET_OFFERS:
      return extend(state, {
        offersCity: action.payload,
      });

    case ActionType.RESET_OFFERS:
      return extend({}, initialState);

    case ActionType.CHANGE_SORT_TYPE:
      return extend(state, {
        sortType: action.payload,
      });
    case ActionType.SET_ACTIVE_CARD:
      return extend(state, {
        activeCard: action.payload,
      });
  }
  return state;
};
