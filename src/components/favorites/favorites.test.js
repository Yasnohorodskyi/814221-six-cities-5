import React from "react";
import renderer from "react-test-renderer";
import {Favorites} from "./favorites";
import {
  sortedFavoriteOffers as sortedOffers,
  offers,
} from "../test-mocks/offers-mocks";
import {BrowserRouter as Router} from "react-router-dom";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
const noop = () => {};

describe(`<Favorite /> render`, () => {
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
    const favoriteComponent = renderer
      .create(
          <Provider store={store}>
            <Router>
              <Favorites
                favoriteOffers={offers.slice(0, 4)}
                sortedOffers={sortedOffers}
                getFavoriteOffers={noop}
              />
            </Router>
          </Provider>
      )
      .toJSON();

    expect(favoriteComponent).toMatchSnapshot();
  });

  it(`renders correctly withought offers`, () => {
    const favoriteComponent = renderer
      .create(
          <Provider store={store}>
            <Router>
              <Favorites
                favoriteOffers={[]}
                sortedOffers={{}}
                getFavoriteOffers={noop}
              />
            </Router>
          </Provider>
      )
      .toJSON();

    expect(favoriteComponent).toMatchSnapshot();
  });


});
