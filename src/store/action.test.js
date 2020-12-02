import {ActionCreator, ActionType} from "./action";
import {favoriteOffers, offers} from "../components/test-mocks/offers-mocks";
import {reviews} from "../components/test-mocks/review-mocks";
import {AuthorizationCodes} from "../const";

describe(`Action creators work correctly`, () => {
  it(`Action creator for changing city returns correct action`, () => {
    expect(ActionCreator.changeCity(`Amsterdam`)).toEqual({
      type: ActionType.CHANGE_CITY,
      payload: `Amsterdam`,
    });
  });

  it(`Action creator for changing sort type returns correct action`, () => {
    expect(ActionCreator.changeSortType(`Popular`)).toEqual({
      type: ActionType.CHANGE_SORT_TYPE,
      payload: `Popular`,
    });
  });

  it(`Action creator for changing active card returns correct action`, () => {
    expect(ActionCreator.setActiveCard(offers[0])).toEqual({
      type: ActionType.SET_ACTIVE_CARD,
      payload: offers[0],
    });
  });

  it(`Action creator for loading offers returns correct action`, () => {
    expect(ActionCreator.loadOffers(offers)).toEqual({
      type: ActionType.LOAD_OFFERS,
      payload: offers,
    });
  });

  it(`Action creator for loading offers nearby returns correct action`, () => {
    expect(ActionCreator.loadOffersNearby(offers.slice(0, 3))).toEqual({
      type: ActionType.LOAD_OFFERS_NEARBY,
      payload: offers.slice(0, 3),
    });
  });

  it(`Action creator for requiring authorizaton returns correct action`, () => {
    expect(
        ActionCreator.requiredAuthorization(AuthorizationCodes.NO_AUTH)
    ).toEqual({
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationCodes.NO_AUTH,
    });
  });

  it(`Action creator for redirecting to route returns correct action`, () => {
    expect(ActionCreator.redirectToRoute(`/`)).toEqual({
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: `/`,
    });
  });

  it(`Action creator for load favorite offers  returns correct action`, () => {
    expect(ActionCreator.loadFavoriteOffers(favoriteOffers)).toEqual({
      type: ActionType.LOAD_FAVORITE_OFFERS,
      payload: favoriteOffers,
    });
  });

  it(`Action creator for load comments by offer  returns correct action`, () => {
    expect(ActionCreator.loadCommentsByOffer(reviews)).toEqual({
      type: ActionType.LOAD_COMMENTS_BY_OFFER,
      payload: reviews,
    });
  });

  it(`Action creator for reset offers returns action with undefined payload`, () => {
    expect(ActionCreator.resetOffers()).toEqual({
      type: ActionType.RESET_OFFERS,
    });
  });
});
