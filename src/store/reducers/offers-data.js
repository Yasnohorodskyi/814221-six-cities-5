const {extend, adaptOffer} = require(`../../utils/common`);
const {ActionType} = require(`../action`);

const initialState = {
  offersAll: [],
  commentsByOffer: [],
  offersCity: [],
  favoriteOffers: [],
};

const offersData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return extend(state, {
        offersAll: action.payload.map((element) => {
          if (element !== adaptOffer(element)) {
            return adaptOffer(element);
          }
        }),
      });
    case ActionType.LOAD_COMMENTS_BY_OFFER:
      return extend(state, {
        commentsByOffer: action.payload,
      });

    case ActionType.LOAD_FAVORITE_OFFERS:
      return extend(state, {
        favoriteOffers: action.payload.map((element) => {
          if (element !== adaptOffer(element)) {
            return adaptOffer(element);
          }
        }),
      });

    case ActionType.CHANGE_FAVORITE_OFFERS:
      return extend(state, {
        offersAll: state.offersAll.map((offer) => {
          if (offer.id === action.payload.id) {
            offer.is_favorite = !offer.is_favorite;
          }
          return offer;
        }),
      });

    case ActionType.LOAD_OFFERS_NEARBY:
      return extend(state, {
        offersNearBy: action.payload.map((element) => {
          if (element !== adaptOffer(element)) {
            return adaptOffer(element);
          }
        }),
      });
  }
  return state;
};

export {offersData};
