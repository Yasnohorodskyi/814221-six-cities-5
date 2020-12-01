import React from "react";
import renderer from "react-test-renderer";
import {offers} from "../test-mocks/offers-mocks";
import Facilities from "../facitilies/facilities";

describe(`<Facilities /> render`, () => {
  it(`renders correctly with full information`, () => {
    const facilitiesComponent = renderer
      .create(<Facilities facilities={offers[0].facilities} />)
      .toJSON();

    expect(facilitiesComponent).toMatchSnapshot();
  });
});
