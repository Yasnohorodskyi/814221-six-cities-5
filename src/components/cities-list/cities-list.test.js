import React from "react";
import renderer from "react-test-renderer";
import {offers} from "../test-mocks/offers-mocks";
import {CitiesList} from "../cities-list/cities-list";
import {Provider} from "react-redux";
import {Router} from "react-router-dom";
import configureStore from "redux-mock-store";
import browserHistory from "../../browser-history";
const noop = () => {};
const activeCard = {};

describe(`<CitiesList/> render`, () => {
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
  it(`renders correctly with full information`, () => {
    const div = document.createElement(`div`);
    div.id = `map`;
    document.body.appendChild(div);
    const citiesListComponent = renderer
      .create(
          <Provider store={store}>
            <Router history={browserHistory}>
              <CitiesList
                offersCity={offers.slice(0, 2)}
                offersAll={offers}
                city={offers[0].cityName}
                changeCity={noop}
                activeCard={activeCard}
              />
            </Router>
          </Provider>
      )
      .toJSON();

    expect(citiesListComponent).toMatchSnapshot();
  });
});
