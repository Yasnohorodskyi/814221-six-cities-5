import {combineReducers} from "redux";
import {offersData} from "./offers-data";
import {offerState} from "./offers-state";
import {user} from "./user";

export const NameSpace = {
  DATA: `DATA`,
  STATE: `STATE`,
  USER: `USER`,
};

export default combineReducers({
  [NameSpace.DATA]: offersData,
  [NameSpace.STATE]: offerState,
  [NameSpace.USER]: user,
});
