import React from "react";
import renderer from "react-test-renderer";
import App from "./app";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {offers} from "../test-mocks/offers-mocks";
import {favoriteOffers} from "../test-mocks/offers-mocks";


describe(`<App /> render`, () => {
  const mockStore = configureStore([]);
  let store = null;
  let appComponent = null;
  beforeEach(() => {
    store = mockStore({
      DATA: {
        offersAll: offers,
      },
      USER: {},
      STATE: {},
    });
  });


  it(`renders correctly with store`, () => {
    appComponent = renderer
      .create(
          <Provider store={store}>
            <App offersAll={offers} favoriteOffers={favoriteOffers} />
          </Provider>
      )
      .toJSON();

    expect(appComponent).toMatchSnapshot();
  });
});
