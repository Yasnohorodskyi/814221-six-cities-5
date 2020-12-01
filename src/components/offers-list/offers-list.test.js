import React from "react";
import renderer from "react-test-renderer";
import {offers} from "../test-mocks/offers-mocks";
import OffersList from "../offers-list/offers-list";
import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
const noop = () => {};

const styleCardClass = `cities__place-card`;
const styleImgClass = `cities__image-wrapper`;
const widthImg = `260`;
const heightImg = `200`;

describe(`<OffersList /> render`, () => {
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
    const offersListComponent = renderer
      .create(
          <Provider store={store}>
            <Router>
              <OffersList
                offers={offers}
                onCardHover={noop}
                styleCardClass={styleCardClass}
                styleImgClass={styleImgClass}
                widthImg={widthImg}
                heightImg={heightImg}
              />
            </Router>
          </Provider>
      )
      .toJSON();

    expect(offersListComponent).toMatchSnapshot();
  });

  it(`renders correctly withought offers`, () => {
    const offersListComponent = renderer
      .create(
          <Provider store={store}>
            <Router>
              <OffersList
                offers={[]}
                onCardHover={noop}
                styleCardClass={styleCardClass}
                styleImgClass={styleImgClass}
                widthImg={widthImg}
                heightImg={heightImg}
              />
            </Router>
          </Provider>
      )
      .toJSON();

    expect(offersListComponent).toMatchSnapshot();
  });
});
