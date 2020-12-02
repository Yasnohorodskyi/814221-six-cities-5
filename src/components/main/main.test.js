import React from "react";
import renderer from "react-test-renderer";
import {offersCity, offers} from "../test-mocks/offers-mocks";
import {BrowserRouter as Router} from "react-router-dom";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {AuthorizationCodes, SortType} from "../../const";
import {Main} from "../main/main";


describe(`<Main /> render`, () => {

  const mockStore = configureStore([]);
  const div = document.createElement(`div`);
  div.id = `map`;
  document.body.appendChild(div);
  let store = null;
  beforeEach(() => {
    store = mockStore({
      DATA: {
        offersAll: offers,
        offersCity,
      },
      USER: {
        authorisationStatus: AuthorizationCodes.NO_AUTH
      },
      STATE: {
        activeCard: {},
        city: `Paris`,
        sortType: SortType.POPULAR
      },
    });
  });

  it(`renders correctly with statusAthoridation = AUTH`, () => {
    const mainComponent = renderer
      .create(
          <Provider store={store}>
            <Router>
              <Main
                authorizationStatus={AuthorizationCodes.AUTH}
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
                authorizationStatus={AuthorizationCodes.NO_AUTH}
                offersCity={offersCity}
              />
            </Router>
          </Provider>
      )
      .toJSON();

    expect(mainComponent).toMatchSnapshot();
  });
});
