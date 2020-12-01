import React from "react";
import renderer from "react-test-renderer";
import {offersCity, offers} from "../test-mocks/offers-mocks";
import {BrowserRouter as Router} from "react-router-dom";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {AuthorizationCodes} from "../../const";
import {Main} from "../main/main";


describe(`<Main /> render`, () => {
  const mockStore = configureStore([]);
  let store = null;
  beforeEach(() => {
    store = mockStore({
      DATA: {
        offersAll: offers,
      },
      USER: {},
      STATE: {
        activeCard: {},
      },
    });
  });

  it(`renders correctly with statusAthoridation = AUTH`, () => {
    const mainComponent = renderer
      .create(
          <Provider store={store}>
            <Router>
              <Main
                authorisationStatus={AuthorizationCodes.AUTH}
                offersCity={offersCity}
              />
            </Router>
          </Provider>
      )
      .toJSON();

    expect(mainComponent).toMatchSnapshot();
  });
  it(`renders correctly with statusAthoridation = NO_AUTH`, () => {
    const mainComponent = renderer
      .create(
          <Provider store={store}>
            <Router>
              <Main
                authorisationStatus={AuthorizationCodes.NO_AUTH}
                offersCity={offersCity}
              />
            </Router>
          </Provider>
      )
      .toJSON();

    expect(mainComponent).toMatchSnapshot();
  });
});
