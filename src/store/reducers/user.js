import {AuthorizationCodes} from "../../const";
import {ActionType} from "../action";

const initialState = {
  authorizationStatus: AuthorizationCodes.NO_AUTH,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return Object.assign({}, state, {
        authorizationStatus: action.payload,
      });
  }

  return state;
};

export {user};
