import {offerState} from "./offers-state";
import {SortType} from "../../const";
import {ActionType} from "../action";
import {offers} from "../../components/test-mocks/offers-mocks";

const newCity = `Cologne`;

it(`Reducer without additional parameters should return initial state`, () => {
  expect(offerState(void 0, {})).toEqual({
    city: `Paris`,
    sortType: SortType.POPULAR,
    activeCard: {},
  });
});

it(`Reducer should update city`, () => {
  expect(
      offerState(
          {
            city: `Paris`,
          },
          {
            type: ActionType.CHANGE_CITY,
            payload: newCity,
          }
      )
  ).toEqual({
    city: `Cologne`,
  });
});

it(`Reducer should update sort type`, () => {
  expect(
      offerState(
          {
            sortType: SortType.POPULAR,
          },
          {
            type: ActionType.CHANGE_SORT_TYPE,
            payload: SortType.PRICE_HIGH_TO_LOW,
          }
      )
  ).toEqual({
    sortType: SortType.PRICE_HIGH_TO_LOW,
  });
});

it(`Reducer should set active card`, () => {
  expect(
      offerState(
          {
            activeCard: {},
          },
          {
            type: ActionType.SET_ACTIVE_CARD,
            payload: offers[0],
          }
      )
  ).toEqual({
    activeCard: offers[0],
  });
});

it(`Reducer should set active card`, () => {
  expect(
      offerState(
          {
            activeCard: {},
          },
          {
            type: ActionType.SET_ACTIVE_CARD,
            payload: offers[0],
          }
      )
  ).toEqual({
    activeCard: offers[0],
  });
});

