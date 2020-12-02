import MockAdapter from "axios-mock-adapter";
import {AuthorizationCodes} from "../../const";
import {createAPI} from "../../services/api";
import {ActionType} from "../action";
import {checkAuth, login} from "../api-actions";
import {user} from "./user";

const api = createAPI(() => {});

it(`Reducer without additional parameters should return initial state`, () => {
  expect(user(void 0, {})).toEqual({
    authorizationStatus: AuthorizationCodes.NO_AUTH,
  });
});

it(`Reducer should update authorization status `, () => {
  expect(
      user(
          {
            authorizationStatus: AuthorizationCodes.NO_AUTH,
          },
          {
            type: ActionType.REQUIRED_AUTHORIZATION,
            payload: AuthorizationCodes.AUTH,
          }
      )
  ).toEqual({
    authorizationStatus: AuthorizationCodes.AUTH,
  });
});

it(`Should make a correct POST API call to /login`, () => {
  const apiMock = new MockAdapter(api);
  const dispatch = jest.fn();
  const fakeUser = {login: `test@test.ru`, password: `123456`};
  const authorizer = login(fakeUser);

  apiMock.onPost(`/login`).reply(200, [{fake: true}]);

  return authorizer(dispatch, () => {}, api).then(() => {
    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(dispatch).toHaveBeenNthCalledWith(1, {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationCodes.AUTH,
    });

    expect(dispatch).toHaveBeenNthCalledWith(2, {
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: `/`,
    });
  });
});

it(`Should make a correct GET API call to /login`, () => {
  const apiMock = new MockAdapter(api);
  const dispatch = jest.fn();
  const authorizer = checkAuth();

  apiMock.onGet(`/login`).reply(200, [{fake: true}]);

  return authorizer(dispatch, () => {}, api).then(() => {
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch).toHaveBeenNthCalledWith(1, {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationCodes.AUTH,
    });
  });
});
