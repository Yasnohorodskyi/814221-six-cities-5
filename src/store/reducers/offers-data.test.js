import MockAdapter from "axios-mock-adapter";
import { createAPI } from "../../services/api";

import {
  offersBeforeAdapt,
  favoriteOffersBeforeAdapt,
} from "../../components/test-mocks/offers-mocks";

import { reviewsBeforeAdapt } from "../../components/test-mocks/review-mocks";
import { offersData } from "./offers-data";
import { ActionType } from "../action";
import { adaptOffer, adaptReview } from "../../utils/common";

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

const offersAllChanged = offersAll.map((offer) => {
  if (offer.id === favoriteId) {
    offer.isFavorite = !offer.isFavorite;
  }
  return offer;

})


// const api = createAPI(() => {});

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
        offersAll: offersAll,
      },
      {
        type: ActionType.CHANGE_FAVORITE_OFFERS,
        payload: favoriteId
      }
    )
  ).toEqual({
    offersAllChanged,
  });
});
