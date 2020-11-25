import {ActionCreator} from "./action";
import {AuthorisationCodes} from "../const";

export const fetchOffers = () => (dispatch, _getState, api) =>
  api
    .get(`/hotels`)
    .then(({data}) => dispatch(ActionCreator.loadOffers(data)));

export const checkAuth = () => (dispatch, _getState, api) =>
  api
    .get(`/login`)
    .then(() =>
      dispatch(ActionCreator.requiredAuthorization(AuthorisationCodes.AUTH))
    )
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
    .then(() =>
      dispatch(ActionCreator.requiredAuthorization(AuthorisationCodes.AUTH))
    )
    .then(() => dispatch(ActionCreator.redirectToRoute(`/`)));

export const fetchCommentsByOffer = (id) => (dispatch, _getState, api) =>
  api
    .get(`/comments/${id}`)
    .then(({data}) => dispatch(ActionCreator.loadCommentsByOffer(data)));

export const sendComment = ({id, comment, rating}) => (
    dispatch,
    _getState,
    api
) =>
  api
    .post(`/comments/${id}`, {comment, rating})
    .then(({data}) => dispatch(ActionCreator.loadCommentsByOffer(data)));

export const fetchFavoriteOffers = () => (dispatch, _getState, api) =>
  api
    .get(`/favorite`)
    .then(({data}) => dispatch(ActionCreator.loadFavoriteOffers(data)));

export const changeFavoriteStatus = ({id, status}) => (
    dispatch,
    _getState,
    api
) =>
  api
    .post(`/favorite/${id}/${status}`, status)
    .then(dispatch(fetchFavoriteOffers()));
