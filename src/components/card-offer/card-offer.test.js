import React from "react";
import renderer from "react-test-renderer";
import {offers} from "../test-mocks/offers-mocks";
import {CardOffer} from "../card-offer/card-offer";
import {adaptOffer} from "../../utils/common";
import {BrowserRouter as Router} from 'react-router-dom';
const noop = () => {};

const styleCardClass = `cities__place-card`;
const styleImgClass = `cities__image-wrapper`;
const widthImg = `260`;
const heightImg = `200`;

describe(`<CardOffer /> render`, () => {
  it(`renders correctly with full information`, () => {
    const cardOfferComponent = renderer
      .create(
          <Router>
            <CardOffer
              offer={adaptOffer(offers[0])}
              onFavButtonClick={noop}
              changeFavoriteOffers={noop}
              onHover={noop}
              styleCardClass={styleCardClass}
              styleImgClass={styleImgClass}
              widthImg={widthImg}
              heightImg={heightImg}
            />
          </Router>
      )
      .toJSON();

    expect(cardOfferComponent).toMatchSnapshot();
  });
});
