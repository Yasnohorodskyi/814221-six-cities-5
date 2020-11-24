export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  RESET_OFFERS: `RESET_OFFERS`,
  CHANGE_SORT_TYPE: `CHANGE_SORT_TYPE`,
  SET_ACTIVE_CARD: `SET_ACTIVE_CARD`,
  LOAD_OFFERS: `LOAD_OFFERS`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
  LOAD_COMMENTS_BY_OFFER: `LOAD_COMMENTS_BY_OFFER`,
  LOAD_FAVORITE_OFFERS: `LOAD_FAVORITE_OFFERS`,
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  resetOffers: () => ({
    type: ActionType.RESET_OFFERS,
  }),

  changeSortType: (sortType) => ({
    type: ActionType.CHANGE_SORT_TYPE,
    payload: sortType,
  }),

  setActiveCard: (activeCard) => ({
    type: ActionType.SET_ACTIVE_CARD,
    payload: activeCard,
  }),

  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers,
  }),

  requiredAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),

  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  }),

  loadCommentsByOffer: (comments) => ({
    type: ActionType.LOAD_COMMENTS_BY_OFFER,
    payload: comments,
  }),

  loadFavoriteOffers: (offers) => ({
    type: ActionType.LOAD_FAVORITE_OFFERS,
    payload: offers,
  })
};
