import React from "react";
import renderer from "react-test-renderer";
import App from "./app";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {offers} from "../test-mocks/offers-mocks";
import {favoriteOffers} from "../test-mocks/offers-mocks";
import {AuthorizationCodes, SortType} from "../../const";


describe(`<App /> render`, () => {
  const div = document.createElement(`div`);
  div.id = `map`;
  document.body.appendChild(div);
  const mockStore = configureStore([]);
  let store = null;
  let appComponent = null;
  beforeEach(() => {
    store = mockStore({
      DATA: {
        offersAll: offers,

      },
      USER: {
        authorizationStatus: AuthorizationCodes.NO_AUTH
      },
      STATE: {
        city: `Paris`,
        activeCard: offers[0],
        sortType: SortType.POPULAR
      },
    });
  });


  it(`renders correctly with store`, () => {
    appComponent = renderer
      .create(
          <Provider store={store}>
            <App offersAll={offers} favoriteOffers={favoriteOffers} authorizationStatus = {AuthorizationCodes.NO_AUTH} />
          </Provider>
      )
      .toJSON();

    expect(appComponent).toMatchSnapshot();
  });
});
