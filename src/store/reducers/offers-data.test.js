import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../services/api";

import {
  offersBeforeAdapt,
  favoriteOffersBeforeAdapt,
  offersCity,
} from "../../components/test-mocks/offers-mocks";

import {reviewsBeforeAdapt} from "../../components/test-mocks/review-mocks";
import {offersData} from "./offers-data";
import {ActionType} from "../action";
import {adaptOffer, adaptReview} from "../../utils/common";
import {
  changeFavoriteStatus,
  fetchCommentsByOffer,
  fetchFavoriteOffers,
  fetchOffers,
  fetchOffersNearby,
  sendComment,
} from "../api-actions";

const offersAll = offersBeforeAdapt.map((offer) => {
  return adaptOffer(offer);
});

const favoriteOffers = favoriteOffersBeforeAdapt.map((offer) => {
  return adaptOffer(offer);
});

const offersNearByBeforeAdapt = offersBeforeAdapt.slice(0, 3);

const offersNearBy = offersNearByBeforeAdapt.map((offer) => {
  return adaptOffer(offer);
});

const commentsByOffer = reviewsBeforeAdapt.map((review) => {
  return adaptReview(review);
});

const favoriteId = 9;
const commentNew = `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam`;
const ratingNew = 5;
const status = 1;

const api = createAPI(() => {});

it(`Reducer without additional parameters should return initial state`, () => {
  expect(offersData(void 0, {})).toEqual({
    offersAll: [],
    commentsByOffer: [],
    offersCity: [],
    favoriteOffers: [],
  });
});

it(`Reducer should update all offers by load them`, () => {
  expect(
      offersData(
          {
            offersAll: [],
          },
          {
            type: ActionType.LOAD_OFFERS,
            payload: offersBeforeAdapt,
          }
      )
  ).toEqual({
    offersAll,
  });
});

it(`Reducer should update favorite offers by load them `, () => {
  expect(
      offersData(
          {
            favoriteOffers: [],
          },
          {
            type: ActionType.LOAD_FAVORITE_OFFERS,
            payload: favoriteOffersBeforeAdapt,
          }
      )
  ).toEqual({
    favoriteOffers,
  });
});

it(`Reducer should create  offers nearby by load  them`, () => {
  expect(
      offersData(
          {
            offersNearBy: [],
          },
          {
            type: ActionType.LOAD_OFFERS_NEARBY,
            payload: offersNearByBeforeAdapt,
          }
      )
  ).toEqual({
    offersNearBy,
  });
});

it(`Reducer should update comments for offer by load them`, () => {
  expect(
      offersData(
          {
            commentsByOffer: [],
          },
          {
            type: ActionType.LOAD_COMMENTS_BY_OFFER,
            payload: reviewsBeforeAdapt,
          }
      )
  ).toEqual({
    commentsByOffer,
  });
});

it(`Reducer should find offer in the array by loaded "id" and add to this offer flag "isFavorite"`, () => {
  expect(
      offersData(
          {
            offersAll,
          },
          {
            type: ActionType.CHANGE_FAVORITE_OFFERS,
            payload: favoriteId,
          }
      )
  ).toEqual({
    offersAll: offersAll.map((offer) => {
      if (offer.id === favoriteId) {
        offer.isFavorite = !offer.isFavorite;
      }
      return offer;
    }),
  });
});

it(`Reducer should reset offers to initial state`, () => {
  expect(
      offersData(
          {
            offersAll,
            favoriteOffers,
            offersCity,
            commentsByOffer,
          },
          {
            type: ActionType.RESET_OFFERS,
          }
      )
  ).toEqual({
    offersAll: [],
    favoriteOffers: [],
    offersCity: [],
    commentsByOffer: [],
  });
});

describe(`Async operation work correctly`, () => {
  it(`Should make a correct API call to /hotels`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offersLoader = fetchOffers();

    apiMock.onGet(`/hotels`).reply(200, [{fake: true}]);

    return offersLoader(dispatch, () => {}, api).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.LOAD_OFFERS,
        payload: [{fake: true}],
      });
    });
  });

  it(`Should make a correct API call to /hotels/id/nearby`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();

    const offersNearByLoader = fetchOffersNearby(favoriteId);

    apiMock.onGet(`/hotels/${favoriteId}/nearby`).reply(200, [{fake: true}]);

    return offersNearByLoader(dispatch, () => {}, api).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.LOAD_OFFERS_NEARBY,
        payload: [{fake: true}],
      });
    });
  });

  it(`Should make a correct API call to /favorite`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();

    const offersFavoritesLoader = fetchFavoriteOffers();

    apiMock.onGet(`/favorite`).reply(200, [{fake: true}]);

    return offersFavoritesLoader(dispatch, () => {}, api).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.LOAD_FAVORITE_OFFERS,
        payload: [{fake: true}],
      });
    });
  });


  it(`Should make a correct GET API call to /comments/id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();

    const commentsByOfferLoader = fetchCommentsByOffer(favoriteId);

    apiMock.onGet(`/comments/${favoriteId}`).reply(200, [{fake: true}]);

    return commentsByOfferLoader(dispatch, () => {}, api).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.LOAD_COMMENTS_BY_OFFER,
        payload: [{fake: true}],
      });
    });
  });

  it(`Should make a correct POST API call to /comments/id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();

    const commentsSender = sendComment({id: favoriteId, comment: commentNew, rating: ratingNew});

    apiMock.onPost(`/comments/${favoriteId}`).reply(200, [{fake: true}]);

    return commentsSender(dispatch, () => {}, api).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.LOAD_COMMENTS_BY_OFFER,
        payload: [{fake: true}],
      });
    });
  });


  it(`Should make a correct POST API call to /favorite/id/status`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();

    const statusChanger = changeFavoriteStatus({id: favoriteId, status});

    apiMock.onPost(`/favorite/${favoriteId}/${status}`).reply(200, [{fake: true}]);

    return statusChanger(dispatch, () => {}, api).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
    });
  });

});
