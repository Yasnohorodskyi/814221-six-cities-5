import {ActionCreator} from "./action";

export const fetchOffers = () => (dispatch, _getState, api) =>
  api
    .get(`/hotels`)
    .then(({data}) => dispatch(ActionCreator.loadOffers(data)));

export const checkAuth = () => (dispatch, _getState, api) =>
  api
    .get(`/login`)
    .then(() => dispatch(ActionCreator.requiredAuthorization(`AUTH`)))
    .catch((err) => {
      throw err;
    });

export const login = ({login: email, password}) => (
    dispatch,
    _getState,
    api
) =>

  api
    .post(`/login`, {email, password})
    .then(() => dispatch(ActionCreator.requiredAuthorization(`AUTH`)))
    .then(() => dispatch(ActionCreator.redirectToRoute(`/`)));
