import {extend} from "../../utils/common";
import {ActionType} from "../../store/action";
import {SortType} from "../../const";

const initialState = {
  city: `Paris`,
  sortType: SortType.POPULAR,
  activeCard: {},
};

export const offerState = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        city: action.payload,
      });

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
