
export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  RESET_OFFERS: `RESET_OFFERS`,
  CHANGE_SORT_TYPE: `CHANGE_SORT_TYPE`,
  SET_ACTIVE_CARD: `SET_ACTIVE_CARD`,
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
  })
};
