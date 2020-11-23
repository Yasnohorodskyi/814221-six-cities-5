const {extend} = require(`../../utils/common`);
const {ActionType} = require(`../action`);

const initialState = {
  offersAll: [],
};

const offersData = (state = initialState, action) => {

  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return extend(state, {
        offersAll: action.payload,
      });
    case ActionType.LOAD_COMMENTS_BY_OFFER:
      return extend(state, {
        commentsByOffer: action.payload,
      });
  }
  return state;
};

export {offersData};
