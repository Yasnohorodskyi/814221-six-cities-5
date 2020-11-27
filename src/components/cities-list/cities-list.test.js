import React from "react";
import renderer from "react-test-renderer";
import { offers } from "../test-mocks/offers-mocks";
import { CitiesList } from "../cities-list/cities-list";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
const noop = () => {};
const activeCard = {};

describe(`<CitiesList/> render`, () => {
  it(`renders correctly with full information`, () => {
    const mockStore = configureStore([]);
    let store = null;
    beforeEach(() => {
      store = mockStore({
        DATA: {
          offersAll: offers,
        },
        USER: {},
        STATE: {
          activeCard = {}
        },
      });
    });

    const citiesListComponent = renderer
      .create(
        <Provider store={store}>
          <CitiesList
            offersCity={offers.slice(0, 2)}
            offersAll={offers}
            city={offers[0].city.name}
            changeCity={noop}
            activeCard={activeCard}
          />
        </Provider>
      )
      .toJSON();

    expect(citiesListComponent).toMatchSnapshot();
  });
});
